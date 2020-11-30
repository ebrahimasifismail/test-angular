import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';
declare var $: any;

// user details
// export interface IUserDetails {
//     uid: string;
//     token: string;
//     email: string;
//     first_name: string;
//     last_name: string;
//     screen_name: string;
//     credential: string;
//     is_staff: boolean;
//     role: string;
//     company_name: string;
//     address: string;
//     phone_number: string;
//     postal_code: string;
//     city: string;
//     country: string;
//     province: string;
//     id?: string;
// }


// // show password on icon click
export const showPasswordHelper = (el:any, _renderer:any) => {
    const input = el.target.parentNode.querySelector('.form-control');
    if (el.target.classList.contains('open')) {
        _renderer.setAttribute(input, 'type', 'text');
        _renderer.removeClass(el.target, 'open');
        _renderer.addClass(el.target, 'close');
    } else {
        _renderer.setAttribute(input, 'type', 'password');
        _renderer.removeClass(el.target, 'close');
        _renderer.addClass(el.target, 'open');
    }
}
export const materialDataTable = {
    pageSize: 10, pageSizeOptions: [50,100, ]
}