/*-----------------------------------------------------------------------------------*/
/*   Product - /products/
/*-----------------------------------------------------------------------------------*/

Dropzone.autoDiscover = false;

$(document).ready(function() {
    quantity_price_view();


    $('#up_file').dropzone({
        url: "/include/upload_file.cshtml", // Set the url for your upload script location
        paramName: "file", // The name that will be used to transfer the file
        maxFiles: 5,
        maxFilesize: 5, // MB
        addRemoveLinks: false,
        previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n <div class=\"dz-filename\"><span data-dz-name></span></div>\n<div class=\"dz-size\"><span data-dz-size></span></div>\n  <div class=\"dz-details\">\n  </div> </div>",

        success: function (file, response) {
            $("#upfile_name").val(response);
        },
        error: function (x,y,z) {
            console.log("Fail uploaded :" + x+"\n"+ y+"\n" + z);
        }
    });
});

$(document).on('change', '#paper, #printing, #spot_uv, #size, #sets, #foils_front, #foils_back, #edge_foils, #embossings, #hole_drilling, #custom_die_cut, #round_corner, #scoring, #perforating, #raised_ink, #numbering', function () {
    quantity_price_view();
});

var default_quantity = "";

function order_file_upload(file_type,file_name,order_num,product_num){

    $.ajax({
        type: "POST",
        url: "/include/file_upload_reg.asp?order_num="+order_num+"&product_num="+product_num+"&file_type="+file_type+"&file_name="+file_name,
        cache: false,
        data:"",
        success: function (data) {
           console.log(data);
        },
        error: function (xhr, status, error) {
            console.log("error_4251 : " + xhr + "___" + status + "___" + error + "___");
            return;
        }
    });
}


function quantity_price_view(){

    $('.quantity-wrapper .qty-detail-list').each(function (v, x) {
        $("#quantity").val($(this).attr("val"));
        if ($(this).attr("sel") == "selected" && default_quantity == "") {
            default_quantity = $(this).attr("val");
        }


        var formData = $("#defaultForm").serialize();
        $.ajax({
            type: "POST",
            url: "/product-include/product_price_check.asp",
            cache: false,
            dataType: 'json',
            data: formData,
            success: function (data) {
                $('.quantity-wrapper .qty-detail-list .view_unit_price').eq(v).html(data.quantity_unit_price)
                $('.quantity-wrapper .qty-detail-list .view_price').eq(v).html(data.quantity_pack_price)
                //console.log(data);
            },
            error: function (x,y,z) {
                console.log("error."+z);
                return;
            }
        });
    })
    $("#quantity").val(default_quantity);
    product_price_check();
}



$(document).on('click', '.quantity-wrapper .qty-detail', function () {
    $("#quantity").val($(this).attr("val"));
    default_quantity = $(this).attr("val");
    product_price_check();
});


$(document).on('click', '.order_submint', function () {
    if($("#project_name").val()==""){
        alert("Please enter a project name."); 
        $("#project_name").focus();
        return;
    }
    else if($("#upfile_name").val()==""){
        alert("No file attached."); 
        retturn;
    }
    $("#project_title").val($("#project_name").val());
    $("#project_memo").val($("#memo").val());


    
    var formData = $("#defaultForm").serialize();
    $.ajax({
        type: "POST",
        url: "/products/reg.asp",
        dataType: 'json',
        data: formData,
        success : function(data){
            if (data.member_id == ""){
               location.href="/login/";
            } 
            else {
                location.href="/cart/";
            }
        },
        error: function (x,y,z) {
            console.log("error."+z);
            return;
        }
    });
});


function product_price_check() {
    
    $(".finishings-option .select2-selection").css("background-color", "white");

    for(i=0;i < $(".finishings-option .select2-selection").length; i++){
        if ($(".finishings:eq("+i+")").val() != "" && $(".finishings:eq("+i+")").val() != null){
            $(".finishings-option .select2-selection:eq("+i+")").css("background-color","#f9f9f9");
        }
    }

    var formData = $("#defaultForm").serialize();
    $.ajax({
        type: "POST",
        url: "/product-include/product_price_check.asp",
        cache: false,
        dataType: 'json',
        data: formData,
        success: function (data) {
            //console.log(data)
            $(".view_printing_cost").html(data.product_view);
            $(".view_finishing_cost").html(data.finishing_view);
            $(".view_final_price").html(data.total_view);

            var view_vinishing = "";
            $(".view_finishings").html("");
            data.finishings.forEach(function (fs) {

                view_vinishing = view_vinishing + '<div class="row align-items-center justify-content-between">'
                view_vinishing = view_vinishing + '    <div class="col-auto font-secondary t500">'+fs.name+'</div>'
                view_vinishing = view_vinishing + '    <div class="col-auto">$'+fs.price+'</div>'
                view_vinishing = view_vinishing + '</div>'
            });
            if (view_vinishing != "") {
                $(".view_finishings").html(view_vinishing);
            }
        },
        error: function (x,y,z) {
            console.log("error."+z);
            return;
        }
    });
}
