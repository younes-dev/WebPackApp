import $ from "jquery";

import 'bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/about.css';

// ############################################
import '@fortawesome/fontawesome-free/css/all.css';

import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';

export default  $(document).ready(function(){
    $('#signin_btn').click(function(){
        var bt_box_object = bootbox.dialog({
                title: 'Please Sign In',
                closeButton: false,
                message: $('#login_form').html(),
                buttons: {
                    ok: {
                        label: 'Sign In',
                        callback: function(){
                            bt_box_object.modal('hide')
                        }
                    }
                }
            }
        );
    });
});