// Start Profile Uploader with a dimension of 130 x 130 intended for circular shapes
let $uploadCrop, tempFilename, rawImg, imageId;

function readFile(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            $('.upload-picture-to-crop').addClass('ready');
            $('#cropImagePop').modal('show');
            rawImg = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
    else {
        alert("Sorry - you're browser doesn't support the FileReader API");
    }
}

// Set viewport into cropper
$uploadCrop = $('#upload-picture-to-crop').croppie({
    viewport: {
        width: 130,
        height: 130,
        type: 'circle'
    },
    enforceBoundary: false,
    enableExif: true
});

// Show cropper on modal
$('#cropImagePop').on('shown.bs.modal', function(){
    $uploadCrop.croppie('bind', {
        url: rawImg
    }).then(function(){
        console.log('jQuery bind complete');
    });
});

// Crop the image and pass to the profile holder img attribute
$('.item-img').on('change', function () { imageId = $(this).data('id'); tempFilename = $(this).val();
$('#cancelCropBtn').data('id', imageId); readFile(this); });
$('#cropImageBtn').on('click', function (ev) {
    $uploadCrop.croppie('result', {
        type: 'base64',
        format: 'jpeg',
        size: {width: 130, height: 130}
    }).then(function (resp) {
        $('#item-img-output').attr('src', resp);
        $('#cropImagePop').modal('hide');
    });
});
// End Profile Uploader with a dimension of 130 x 130 intended for circular shapes