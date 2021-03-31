tinymce.init({
    selector: 'textarea#long_description',
    menubar: false,
    plugins: 'preview importcss searchreplace autolink autosave directionality visualblocks visualchars fullscreen image link table charmap hr pagebreak nonbreaking toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons table',
    mobile: {
        plugins: 'preview importcss searchreplace autolink autosave directionality visualblocks visualchars fullscreen image link table charmap hr pagebreak nonbreaking toc insertdatetime advlist lists wordcount textpattern noneditable help charmap quickbars emoticons table'
    },    
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview | insertfile image link | ltr rtl | table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol',
    autosave_ask_before_unload: true,
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    image_advtab: true,
    /* enable automatic uploads of images represented by blob or data URIs*/
    automatic_uploads: false,
    /*
        URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
        images_upload_url: 'postAcceptor.php',
        here we add custom filepicker only to Image dialog
    */
    file_picker_types: 'image',
    /* and here's our custom image picker*/
    file_picker_callback: function (cb, value, meta) {
        var input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        /*
            Note: In modern browsers input[type="file"] is functional without
            even adding it to the DOM, but that might not be the case in some older
            or quirky browsers like IE, so you might want to add it to the DOM
            just in case, and visually hide it. And do not forget do remove it
            once you do not need it anymore.
        */
        input.onchange = function () {
            var file = this.files[0];
            var reader = new FileReader();
            reader.onload = function () {
                /*
                    Note: Now we need to register the blob in TinyMCEs image blob
                    registry. In the next release this part hopefully won't be
                    necessary, as we are looking to handle it internally.
                */
                var id = 'blobid' + (new Date()).getTime();
                var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
            };
            reader.readAsDataURL(file);
        };
        input.click();
    },
    importcss_append: true,
    height: 400,
    image_caption: true,
    quickbars_selection_toolbar: 'bold italic | h2 h3 blockquote quicktable',
    noneditable_noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
});

tinymce.init({
    selector: 'textarea#short_description',
    menubar: false,
    plugins: 'preview importcss searchreplace autolink autosave directionality visualblocks visualchars fullscreen  link table charmap hr pagebreak nonbreaking toc insertdatetime advlist lists wordcount textpattern help charmap emoticons',
    mobile: {
        plugins: 'preview importcss searchreplace autolink autosave directionality visualblocks visualchars fullscreen  link table charmap hr pagebreak nonbreaking toc insertdatetime advlist lists wordcount textpattern help charmap emoticons'
    },    
    toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview | link | ltr rtl |',
    autosave_ask_before_unload: true,
    autosave_restore_when_empty: false,
    autosave_retention: '2m',
    importcss_append: true,
    height: 200,
    toolbar_mode: 'sliding',
});