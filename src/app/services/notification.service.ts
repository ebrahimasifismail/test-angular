import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    toastrOptions: any = {
        tapToDismiss: true,
        progressBar: true,
        progressAnimation: 'decreasing',
        titleClass: 'toastr-title',
        timeOut: 8000,
        messageClass: 'toastr-message'
    };
    constructor(private toastr: ToastrService) { }

    notifySuccess(message: string, title: string) {
        this.toastr.success(message, title, this.toastrOptions);
    }

    notifyError(message: string, title: string) {
        this.toastr.error(message, title, this.toastrOptions);
    }

    notifyInfo(message: string, title: string) {
        this.toastr.info(message, title, this.toastrOptions);
    }

    notifyWarning(message: string, title: string) {
        this.toastr.warning(message, title, this.toastrOptions);
    }
}
