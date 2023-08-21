(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\FotaApp\Otauserinterface\src\main.ts */"zUnb");


/***/ }),

/***/ "0081":
/*!************************************************!*\
  !*** ./src/app/pages/alert/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "7EXy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "tVuA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const alert_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.removeAlert(alert_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.cssClass(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // reset 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => x.keepAfterRouteChange = false);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert))
            return;
        // fade out alert if this.fade === true
        const timeout = this.fade ? 250 : 0;
        alert.fade = this.fade;
        setTimeout(() => {
            // filter alert out of array
            this.alerts = this.alerts.filter(x => x !== alert);
        }, timeout);
    }
    cssClass(alert) {
        if ((alert === null || alert === void 0 ? void 0 : alert.type) === undefined) {
            return null;
        }
        const alertTypeClass = {
            [_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success]: 'alert-success',
            [_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error]: 'alert-danger',
            [_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info]: 'alert-info',
            [_alert__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning]: 'alert-warning'
        };
        const classes = [alertTypeClass[alert.type]];
        if (alert.fade)
            classes.push('fade');
        // return space separated class string
        return classes.join(' ');
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"]], inputs: { id: "id", fade: "fade" }, decls: 1, vars: 1, consts: [["class", "alert alert-dismissible mt-4 container", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "alert", "alert-dismissible", "mt-4", "container", 3, "ngClass"], [3, "innerHTML"], [1, "btn-close", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], encapsulation: 2 });


/***/ }),

/***/ "7EXy":
/*!**************************************!*\
  !*** ./src/app/pages/alert/alert.ts ***!
  \**************************************/
/*! exports provided: Alert, AlertType, AlertOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertOptions", function() { return AlertOptions; });
class Alert {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class AlertOptions {
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: '//18.204.89.28:5000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JmFF":
/*!****************************************************************!*\
  !*** ./src/app/pages/create-device/create-device.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateDeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDeviceComponent", function() { return CreateDeviceComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service.service */ "ibrm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert/alert.service */ "tVuA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function CreateDeviceComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Device name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateDeviceComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateDeviceComponent_div_9_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.name.errors.required);
} }
function CreateDeviceComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Serial number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateDeviceComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateDeviceComponent_div_14_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.serialNo.errors.required);
} }
function CreateDeviceComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Description is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateDeviceComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateDeviceComponent_div_19_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.description.errors.required);
} }
class CreateDeviceComponent {
    constructor(cd, formBuilder, service, router, alertService) {
        this.cd = cd;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.alertService = alertService;
        this.submitted = false;
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            serialNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    get name() {
        return this.form.get('name');
    }
    get serialNo() {
        return this.form.get('serialNo');
    }
    get description() {
        return this.form.get('description');
    }
    createDevice() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        const userData = this.form.value;
        console.log(this.form.value);
        const { name, serialNo, description } = this.form.value;
        this.service.addDevice(name, serialNo, description).subscribe(data => {
            console.log('create');
            console.log(data);
            if (data.status == "success") {
                this.alertService.success('Device added successfully', { keepAfterRouteChange: true });
                this.router.navigate(['/devicelist']);
            }
            else {
                console.log('error');
            }
        }, error => {
            //this.errorMessage = error.message;
            if (error.error.status == "error") {
                window.localStorage.setItem("token", '');
                //  this.router.navigate(['/signin']);
            }
        });
    }
}
CreateDeviceComponent.ɵfac = function CreateDeviceComponent_Factory(t) { return new (t || CreateDeviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
CreateDeviceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateDeviceComponent, selectors: [["app-create-device"]], decls: 23, vars: 4, consts: [[1, "signup"], [1, "signup-form"], [1, "form-input", 3, "formGroup"], [1, "form-group"], ["type", "text", "placeholder", "", "id", "name", "formControlName", "name"], ["class", "error", 4, "ngIf"], ["type", "text", "placeholder", "", "id", "serialNo", "formControlName", "serialNo"], ["type", "text", "placeholder", "", "id", "description", "formControlName", "description"], [1, "form-group", "buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "error"], [4, "ngIf"]], template: function CreateDeviceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Device Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CreateDeviceComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Serial Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CreateDeviceComponent_div_14_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CreateDeviceComponent_div_19_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateDeviceComponent_Template_button_click_21_listener() { return ctx.createDevice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.serialNo.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.description.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".signup[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  justify-items: center;\n}\n.signup[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 24px;\n  color: #31465B;\n  font-weight: bold;\n}\n.signup[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  width: 500px;\n  height: auto;\n  margin: 0 auto;\n  background: #fff;\n  padding: 25px 40px;\n  box-shadow: 0 3px 10px #939595;\n  border-radius: 10px;\n}\n.signup[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .checkbox-btn[_ngcontent-%COMP%] {\n  margin: 40px 0;\n  clear: both;\n}\n.signup[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  position: absolute;\n}\n.signup[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjcmVhdGUtZGV2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQUFJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUFFTjtBQUFJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBRU47QUFBSTtFQUNFLDhCQUFBO0FBRU4iLCJmaWxlIjoiY3JlYXRlLWRldmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAge1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6NTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTo1MHB4O1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICBjb2xvcjogIzMxNDY1QjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuc2lnbnVwLWZvcm0ge1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6MjVweCA0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMTBweCAjOTM5NTk1O1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgLy9tYXJnaW4tcmlnaHQ6NzBweDtcclxuICAgIC5jaGVja2JveC1idG4ge1xyXG4gICAgICBtYXJnaW46NDBweCAwO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICAgIC5lcnJvciB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuICAgIC5mb3JtLWlucHV0IC5mb3JtLWdyb3VwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTozMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "PsgU":
/*!******************************************************!*\
  !*** ./src/app/pages/firmware/firmware.component.ts ***!
  \******************************************************/
/*! exports provided: FirmwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirmwareComponent", function() { return FirmwareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service.service */ "ibrm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/alert.service */ "tVuA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FirmwareComponent_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Firmware details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FirmwareComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Model ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Model serial no");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Version");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Created at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Release date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FirmwareComponent_ul_6_Template_span_click_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.disabledFirmware($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.model_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.model_sr_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.organisation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.created_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2 == null ? null : item_r2.releaseDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (item_r2 == null ? null : item_r2.status) == 1 ? "green" : "orange");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", (item_r2 == null ? null : item_r2.status) == 1 ? "\u00C4ctive" : "Inactive", " ");
} }
class FirmwareComponent {
    constructor(service, router, alertService, activatedRoute) {
        this.service = service;
        this.router = router;
        this.alertService = alertService;
        this.activatedRoute = activatedRoute;
        this.firmwareDetails = [];
    }
    ngOnInit() {
        this.getFirmwareDetails();
    }
    getFirmwareDetails() {
        let id = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.service.getFirmware(id).subscribe(data => {
            var _a, _b;
            console.log(data);
            if (data.status == "success" && ((_b = (_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.firmwares) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                this.firmwareDetails = data.data.firmwares;
                this.firmwareDetails.forEach(function (result, index) {
                    let date = new Date(result.created_at);
                    let release = new Date(result.releaseDate);
                    result.created_at = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/');
                    result.releaseDate = [release.getFullYear(), release.getMonth() + 1, release.getDate()].join('/');
                });
                console.log(this.firmwareDetails);
            }
            else {
                this.alertService.success('No Firmeware found', { keepAfterRouteChange: true });
                console.log('error');
                this.noheader = true;
            }
        }, error => {
            console.log(error);
        });
    }
    disabledFirmware(event) {
        var _a, _b;
        let uid = (_a = this.firmwareDetails[0]) === null || _a === void 0 ? void 0 : _a.uid;
        let model_id = (_b = this.firmwareDetails[0]) === null || _b === void 0 ? void 0 : _b.model_id;
        this.service.disabledFirmware(uid, model_id).subscribe(resp => {
            // console.log(resp);
            this.getFirmwareDetails();
        }, error => {
            console.log(error);
        });
        event.preventDefault();
    }
}
FirmwareComponent.ɵfac = function FirmwareComponent_Factory(t) { return new (t || FirmwareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
FirmwareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FirmwareComponent, selectors: [["app-firmware"]], decls: 7, vars: 2, consts: [[1, "firmware"], [4, "ngIf"], ["routerLink", "/devicelist", 1, "devices-link"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-arrow-right"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], [4, "ngFor", "ngForOf"], [2, "font-family", "arlrdbd", 3, "ngClass"], [1, "edit-icon", 3, "click"]], template: function FirmwareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FirmwareComponent_h4_1_Template, 2, 0, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Go to devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FirmwareComponent_ul_6_Template, 37, 8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noheader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.firmwareDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: [".firmware[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  height: calc(100vh - 90px);\n  position: relative;\n}\n.firmware[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\n.firmware[_ngcontent-%COMP%]   .devices-link[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #0d6efd;\n  text-decoration: underline;\n  top: 0px;\n  right: 0;\n}\n.firmware[_ngcontent-%COMP%]   .devices-link.header[_ngcontent-%COMP%] {\n  top: -20px;\n}\n.firmware[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 30px 0 40px;\n  padding: 30px 20px;\n  float: left;\n  width: 100%;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.firmware[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  border: 0;\n  padding: 0 20px 20px;\n  list-style: none;\n}\n.firmware[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"arlrdbd\";\n  display: block;\n  margin: 0 0 3px;\n  color: #000;\n}\n.firmware[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.firmware[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  color: green;\n}\n.firmware[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .orange[_ngcontent-%COMP%] {\n  color: orange;\n}\n.firmware[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .edit-icon[_ngcontent-%COMP%] {\n  background: url('edit.svg') no-repeat;\n  display: inline-block;\n  cursor: pointer;\n  margin: 0 0 0 6px;\n  width: 18px;\n  height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmaXJtd2FyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFFO0VBQ0Usa0JBQUE7RUFBb0IsY0FBQTtFQUFnQiwwQkFBQTtFQUEyQixRQUFBO0VBQVMsUUFBQTtBQU01RTtBQUxJO0VBQ0UsVUFBQTtBQU9OO0FBSkU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBTUo7QUFMSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUFPTjtBQU5NO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFRUjtBQU5NO0VBQ0UsY0FBQTtBQVFSO0FBTE07RUFDRSxZQUFBO0FBT1I7QUFMTTtFQUNFLGFBQUE7QUFPUjtBQUxNO0VBQ0UscUNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBT1IiLCJmaWxlIjoiZmlybXdhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlybXdhcmUge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6Y2FsYygxMDB2aCAtIDkwcHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoNCB7XHJcbiAgICBmb250LXNpemU6MjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuZGV2aWNlcy1saW5rIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgY29sb3I6ICMwZDZlZmQ7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO3RvcDowcHg7IHJpZ2h0OjA7XHJcbiAgICAmLmhlYWRlciB7XHJcbiAgICAgIHRvcDotMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgdWwge1xyXG4gICAgbWFyZ2luOjMwcHggMCA0MHB4O1xyXG4gICAgcGFkZGluZzozMHB4IDIwcHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gICAgbGkge1xyXG4gICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICB3aWR0aDo1MCU7XHJcbiAgICAgIGJvcmRlcjowO1xyXG4gICAgICBwYWRkaW5nOjAgMjBweCAyMHB4O1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ2FybHJkYmQnO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjowIDAgM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgfVxyXG4gICAgICAuZ3JlZW4ge1xyXG4gICAgICAgIGNvbG9yOmdyZWVuO1xyXG4gICAgICB9XHJcbiAgICAgIC5vcmFuZ2Uge1xyXG4gICAgICAgIGNvbG9yOm9yYW5nZTtcclxuICAgICAgfVxyXG4gICAgICAuZWRpdC1pY29uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kIDp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZWRpdC5zdmcnKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBtYXJnaW46MCAwIDAgNnB4O1xyXG4gICAgICAgIHdpZHRoOjE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OjE4cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/alert/alert.component */ "0081");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'FotaApp';
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "nav-ota"], [1, "container-fluid"], [1, "left-sidenav"], ["width", "270px", "src", "https://www.faststreamtech.com/wp-content/uploads/2022/11/FASTSTREAM-LOGO-FINAL-02.png"], [1, "signin"], [2, "position", "relative", "top", "70px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_pages_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".nav-ota[_ngcontent-%COMP%] {\n  min-height: 100%;\n}\n.nav-ota[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.nav-ota[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .left-sidenav[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #31465B;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.nav-ota[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .signin[_ngcontent-%COMP%] {\n  float: left;\n  width: calc(100% - 400px);\n  left: 350px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUFBRjtBQUNFO0VBSUUsV0FBQTtBQUZKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBRE47QUFHSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUROIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2LW90YSB7XHJcbiAgbWluLWhlaWdodDoxMDAlO1xyXG4gIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgLy9mbGV4LXdyYXA6IGluaGVyaXQ7XHJcbiAgICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvL2p1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAubGVmdC1zaWRlbmF2IHtcclxuICAgICAgd2lkdGg6MzAwcHg7XHJcbiAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzE0NjVCO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6MDtcclxuICAgICAgdG9wOjA7XHJcbiAgICB9XHJcbiAgICAuc2lnbmluIHtcclxuICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNDAwcHgpO1xyXG4gICAgICBsZWZ0OjM1MHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "UE1v":
/*!**************************************************!*\
  !*** ./src/app/pages/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service.service */ "ibrm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SigninComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid email format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SigninComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SigninComponent_div_14_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.password == null ? null : ctx_r2.password.errors == null ? null : ctx_r2.password.errors.required);
} }
class SigninComponent {
    constructor(cd, formBuilder, service, router) {
        this.cd = cd;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    ngOnInit() {
        document.querySelector('html').classList.remove('devicelist');
    }
    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }
    onSubmit() {
        // if (this.loginForm.invalid) {
        //   this.loginForm.markAllAsTouched();
        //   return; // Form is not valid, do not proceed with login
        // }
        const { email, password } = this.loginForm.value;
        this.service.login(email, password).subscribe(data => {
            // console.log(data)
            if (data.status == "success") {
                window.localStorage.setItem("token", data.data.access_token);
                window.localStorage.setItem("data", JSON.stringify(data.data.company));
                //this.service.companyDetails = data.data.company;
                this.router.navigate(['/devicelist']);
            }
            else {
                console.log('error');
                // this.errorMessage = data.Message;S
            }
        }, error => {
            //this.errorMessage = error.message;
        });
        // Perform login logic here
        /*const userData = JSON.parse(localStorage.getItem('userData'));
        if (
          userData &&
          userData.username === this.loginForm.value.username &&
          userData.password === this.loginForm.value.password
        ) {
          // User is authenticated
        } else {*
          // User is not authenticated
        }*/
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_service__WEBPACK_IMPORTED_MODULE_2__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 24, vars: 5, consts: [[1, "nav-item", "dropdown", "signin-container", "d-flex"], [1, "signin"], [1, "login-form"], [1, "user-image"], [3, "formGroup"], [1, "form-group"], ["type", "text", "placeholder", "Email address", "id", "email", "formControlName", "email"], [1, "error", 3, "hidden"], [4, "ngIf"], ["type", "password", "placeholder", "Password", "id", "password", "formControlName", "password"], ["class", "error", 4, "ngIf"], [1, "form-group", "buttons"], [1, "btn", "btn-primary", 3, "click"], [1, "btn-signup"], ["href", "javascript:void(0);"], ["href", "javascript:void(0);", 1, "link-forgot"], [1, "error"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Login into your account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SigninComponent_div_10_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SigninComponent_div_11_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SigninComponent_div_14_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SigninComponent_Template_button_click_16_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Log In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.email.valid || ctx.email.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.password.invalid && (ctx.password.dirty || ctx.password.touched));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".login-form[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n}\n.login-form[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom-color: #606060;\n  border-width: 0 0 1px 0;\n  border-style: solid;\n  width: 100%;\n  padding: 9px 15px;\n  font-size: 15px;\n}\n.login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.login-form[_ngcontent-%COMP%]   .link-forgot[_ngcontent-%COMP%] {\n  color: #004FDA;\n  float: right;\n  text-decoration: none;\n  font-size: 13px;\n  font-family: \"MontserratSemiBold\";\n  margin: 30px 0 0;\n}\n.signin-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.signin-container[_ngcontent-%COMP%]   .signin[_ngcontent-%COMP%] {\n  width: 540px;\n  margin: 0 auto;\n  background: #fff;\n  padding: 25px 40px 10px;\n}\n.signin-container[_ngcontent-%COMP%]   .btn-signup[_ngcontent-%COMP%] {\n  float: left;\n}\n.signin-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0k7RUFDRSxlQUFBO0FBQ047QUFFQztFQUNHLG1CQUFBO0FBQUo7QUFDSTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNOO0FBQU07RUFDRSxhQUFBO0FBRVI7QUFFRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0E7RUFDRSxrQkFBQTtBQUFGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZm9ybSB7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIC51c2VyLWltYWdlIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6MjBweDtcclxuICAgIH1cclxuICB9XHJcbiAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM2MDYwNjA7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAwO1xyXG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBwYWRkaW5nOjlweCAxNXB4O1xyXG4gICAgICBmb250LXNpemU6MTVweDtcclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubGluay1mb3Jnb3Qge1xyXG4gICAgY29sb3I6IzAwNEZEQTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZToxM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0U2VtaUJvbGQnO1xyXG4gICAgbWFyZ2luOjMwcHggMCAwO1xyXG4gIH1cclxufVxyXG4uc2lnbmluLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5zaWduaW4ge1xyXG4gICAgd2lkdGg6NTQwcHg7XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6MjVweCA0MHB4IDEwcHg7XHJcbiAgfVxyXG4gIC5idG4tc2lnbnVwIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG4gIC5lcnJvciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/signin/signin.component */ "UE1v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/device-list/device-list.component */ "xZ7t");
/* harmony import */ var _pages_create_device_create_device_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages//create-device/create-device.component */ "JmFF");
/* harmony import */ var _pages_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/alert/alert.component */ "0081");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_firmware_firmware_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/firmware/firmware.component */ "PsgU");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }, _auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
        _pages_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_7__["DeviceListComponent"],
        _pages_create_device_create_device_component__WEBPACK_IMPORTED_MODULE_8__["CreateDeviceComponent"],
        _pages_alert_alert_component__WEBPACK_IMPORTED_MODULE_9__["AlertComponent"],
        _pages_firmware_firmware_component__WEBPACK_IMPORTED_MODULE_11__["FirmwareComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]] }); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AuthService {
    constructor() { }
    getToken() {
        return window.localStorage.getItem("token");
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ibrm":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class ServiceService {
    constructor(http) {
        this.http = http;
        this.SharingData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    login(username, password) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/api/v1/iot/company/login/`, { email: username, password: password });
    }
    getDeviceList() {
        let auth_token = window.localStorage.getItem("token");
        let data = window.localStorage.getItem("data");
        this.companyDetails = JSON.parse(data);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth_token}`,
        });
        const requestOptions = { headers: headers };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/api/v1/iot/company/getdevicemodels/`, requestOptions);
    }
    addDevice(name, serial, description) {
        let auth_token = window.localStorage.getItem("token");
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth_token}`,
        });
        const requestOptions = { headers: headers };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/api/v1/iot/company/add/devicemodel/`, { model_name: name, model_serial_no: serial, model_description: description }, { headers });
    }
    getFirmware(id) {
        let auth_token = window.localStorage.getItem("token");
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth_token}`,
        });
        const requestOptions = { headers: headers };
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/api/v1/iot/device/ota/list/firmware/${id}/?page=1&limit=1`, requestOptions);
    }
    disabledFirmware(uid, model_id) {
        let auth_token = window.localStorage.getItem("token");
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth_token}`,
        });
        const requestOptions = { headers: headers };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/api/v1/iot/device/ota/disable/firmware/`, { firmware_uid: uid, firmware_model_id: model_id }, { headers, observe: 'events' });
    }
}
ServiceService.ɵfac = function ServiceService_Factory(t) { return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "ccyI");



class AuthGuard {
    constructor(router, authgordServices) {
        this.router = router;
        this.authgordServices = authgordServices;
    }
    canActivate(route, state) {
        let token = this.authgordServices.getToken();
        if (token) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/signin']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tVuA":
/*!**********************************************!*\
  !*** ./src/app/pages/alert/alert.service.ts ***!
  \**********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "7EXy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _alert__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign(Object.assign({}, options), { type: _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _alert__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign(Object.assign({}, options), { type: _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _alert__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign(Object.assign({}, options), { type: _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _alert__WEBPACK_IMPORTED_MODULE_2__["Alert"](Object.assign(Object.assign({}, options), { type: _alert__WEBPACK_IMPORTED_MODULE_2__["AlertType"].Warning, message })));
    }
    // main alert method
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _alert__WEBPACK_IMPORTED_MODULE_2__["Alert"]({ id }));
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/signin/signin.component */ "UE1v");
/* harmony import */ var _pages_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/device-list/device-list.component */ "xZ7t");
/* harmony import */ var _pages_create_device_create_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/create-device/create-device.component */ "JmFF");
/* harmony import */ var _pages_firmware_firmware_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/firmware/firmware.component */ "PsgU");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'signin' },
    { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | pages-home-home-module */ "pages-home-home-module").then(__webpack_require__.bind(null, /*! ./pages/home/home.module */ "99Un")).then(m => m.HomeModule), pathMatch: 'full' },
    { path: 'signup', loadChildren: () => __webpack_require__.e(/*! import() | pages-signup-signup-module */ "pages-signup-signup-module").then(__webpack_require__.bind(null, /*! ./pages/signup/signup.module */ "UUSl")).then(m => m.SignupModule), pathMatch: 'full' },
    { path: 'contactus', loadChildren: () => __webpack_require__.e(/*! import() | pages-contactus-contactus-module */ "pages-contactus-contactus-module").then(__webpack_require__.bind(null, /*! ./pages/contactus/contactus.module */ "h8FD")).then(m => m.ContactusModule), pathMatch: 'full' },
    { path: 'forgot', loadChildren: () => __webpack_require__.e(/*! import() | pages-forgot-forgot-module */ "pages-forgot-forgot-module").then(__webpack_require__.bind(null, /*! ./pages/forgot/forgot.module */ "Ityv")).then(m => m.ForgotModule), pathMatch: 'full' },
    { path: 'password-updated', loadChildren: () => __webpack_require__.e(/*! import() | pages-password-updated-password-updated-module */ "pages-password-updated-password-updated-module").then(__webpack_require__.bind(null, /*! ./pages/password-updated/password-updated.module */ "l2xF")).then(m => m.PasswordUpatedModule), pathMatch: 'full' },
    { path: 'signin', component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_1__["SigninComponent"], pathMatch: 'full' },
    { path: 'devicelist', component: _pages_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_2__["DeviceListComponent"], pathMatch: 'full', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'createDevice', component: _pages_create_device_create_device_component__WEBPACK_IMPORTED_MODULE_3__["CreateDeviceComponent"], pathMatch: 'full', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'firmwaredetails', component: _pages_firmware_firmware_component__WEBPACK_IMPORTED_MODULE_4__["FirmwareComponent"], pathMatch: 'full', canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xZ7t":
/*!************************************************************!*\
  !*** ./src/app/pages/device-list/device-list.component.ts ***!
  \************************************************************/
/*! exports provided: DeviceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListComponent", function() { return DeviceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service.service */ "ibrm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../alert/alert.service */ "tVuA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function DeviceListComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeviceListComponent_tr_55_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getFirmware(item_r1.uid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.model_serial_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.model_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.model_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1 == null ? null : item_r1.created_at);
} }
class DeviceListComponent {
    constructor(service, router, alertService) {
        this.service = service;
        this.router = router;
        this.alertService = alertService;
        //this.companyDetails = service.companyDetails;
    }
    ngOnInit() {
        document.querySelector('html').classList.add('devicelist');
        this.service.getDeviceList().subscribe(data => {
            if (data.status == "success") {
                this.deviceList = data.data.device_models;
                this.companyDetails = this.service.companyDetails;
                this.deviceList.forEach(function (result, index) {
                    let date = new Date(result.created_at);
                    console.log(date);
                    result.created_at = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('/');
                    // return result;
                    //console.log(result.created_at)
                });
                console.log(this.deviceList);
            }
            else {
                console.log('error');
                // this.errorMessage = data.Message;S
            }
        }, error => {
            console.log(error.error.status);
            if (error.error.status == "error") {
                window.localStorage.setItem("token", '');
                // this.router.navigate(['/signin']);
            }
            //this.errorMessage = error.message;
        });
    }
    logout() {
        this.alertService.success('You have been successfully logged out!', { keepAfterRouteChange: true });
        window.localStorage.setItem("token", '');
        this.router.navigate(['/signin']);
    }
    getFirmware(uid) {
        this.router.navigate(['/firmwaredetails', { id: uid }]);
    }
}
DeviceListComponent.ɵfac = function DeviceListComponent_Factory(t) { return new (t || DeviceListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
DeviceListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeviceListComponent, selectors: [["app-device-list"]], decls: 56, vars: 9, consts: [[1, "top-header"], ["href", "javascript:void(0)", 3, "click"], [1, "devielist"], [1, "company-details"], [1, "list-group"], [1, "list-group-item", "active"], [1, "list-group-item"], [1, "tables"], [1, "device-count"], ["href", "javascript:void(0)", "routerLink", "/createDevice", 1, "btn-add-devices"], [1, "table-grid"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 2, "text-decoration", "underline", 3, "click"]], template: function DeviceListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeviceListComponent_Template_a_click_1_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Company details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Organisation Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact Person:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "City:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Country:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Devices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Add device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Model Serial no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Model Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Model Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Created at");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, DeviceListComponent_tr_55_Template, 14, 4, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.organisation_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.organisation_contact_person, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.organisation_phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.organisation_email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.organisation_address, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.organisation_city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.companyDetails == null ? null : ctx.companyDetails.organisation_country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx.deviceList == null ? null : ctx.deviceList.length, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.deviceList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".table-grid[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: block;\n  float: left;\n  width: 100%;\n  min-height: 630px;\n}\n.table-grid[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n}\n.table-grid[_ngcontent-%COMP%]:hover::-webkit-scrollbar-thumb {\n  border: solid 1px transparent;\n}\n.table-grid[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  border: solid 1px transparent;\n}\n.table-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  display: block !important;\n  top: 0;\n  z-index: 98;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.table-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n  display: table;\n}\n.table-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 25%;\n}\n.table-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .iccid-header[_ngcontent-%COMP%] {\n  padding: 0 0 0 30px;\n}\n.table-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.table-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sort-column[_ngcontent-%COMP%] {\n  float: left;\n}\n.table-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .table-grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  white-space: nowrap;\n}\n.table-grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  display: table;\n  position: relative;\n  width: 100%;\n}\n.table-grid[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-grid[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-grid[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-grid[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], .table-grid[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], .table-grid[_ngcontent-%COMP%]    > tfoot[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n.table-grid[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  background: #31465B;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 22px;\n  color: #fff;\n  padding: 0 15px;\n  height: 42px;\n  font-weight: bold;\n}\n.table-grid[_ngcontent-%COMP%]    > thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th.noBorderBottom[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.table-grid[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  height: 40px;\n  border-bottom: 1px solid #d8dada;\n  color: #000;\n  padding: 0 12px 0 15px;\n  font-size: 14px;\n}\n.table-grid[_ngcontent-%COMP%]    > tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.table-grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f6f6f6;\n}\n.top-header[_ngcontent-%COMP%] {\n  float: left;\n  width: calc(100% + 120px);\n  background: #0d6efd;\n  height: 60px;\n  position: absolute;\n  left: -60px;\n  margin: 0 0 50px;\n  right: 0;\n  top: -8px;\n  text-align: right;\n  padding: 15px 30px 0 0;\n}\n.top-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bold;\n  font-size: 12px;\n  text-decoration: none;\n  padding: 5px 12px;\n  border: 1px solid #fff;\n  border-radius: 6px;\n}\n.devielist[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  position: relative;\n  margin: 90px 0 60px;\n}\n.devielist[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 16px;\n  color: #31465B;\n  font-weight: bold;\n}\n.devielist[_ngcontent-%COMP%]   .device-count[_ngcontent-%COMP%] {\n  color: #ED0302;\n}\n.devielist[_ngcontent-%COMP%]   .company-details[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  margin: 0 0 70px 0;\n}\n.devielist[_ngcontent-%COMP%]   .company-details[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.devielist[_ngcontent-%COMP%]   .company-details[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background: #31465B;\n  border: 1px solid #31465B;\n}\n.devielist[_ngcontent-%COMP%]   .company-details[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 24%;\n  margin: 0;\n  display: inline-block;\n}\n.devielist[_ngcontent-%COMP%]   .tables[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  position: relative;\n}\n.btn-add-devices[_ngcontent-%COMP%] {\n  padding: 8px 12px 8px 35px;\n  text-decoration: none;\n  font-size: 14px;\n  font-weight: bold;\n  background: #0d6efd url('plus-large-white.svg') 12px 10px no-repeat;\n  color: #fff;\n  background-size: 15px 17px;\n  border-radius: 6px;\n  position: absolute;\n  top: -15px;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXZpY2UtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFJQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUZGO0FBSUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQUZKO0FBSUU7RUFFRSw2QkFBQTtBQUhKO0FBS0U7RUFFRSw2QkFBQTtBQUpKO0FBT0U7RUFFRSx5QkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFQSjtBQVFJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQU5SO0FBT007RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQUxSO0FBUUk7RUFDRSxtQkFBQTtBQU5OO0FBU0k7RUFDRSxhQUFBO0FBUE47QUFTSTtFQUNFLFdBQUE7QUFQTjtBQVdFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFZRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFWSjtBQXFCTTs7Ozs7O0VBRUUsbUJBQUE7QUFkUjtBQWtCRTtFQUNFLHNCQUFBO0VBRUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBakJKO0FBbUJJO0VBQ0UsbUJBQUE7QUFqQk47QUFvQkU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFsQko7QUFvQkU7RUFDRSxtQkFBQTtBQWxCSjtBQXVCUTtFQUNFLG1CQUFBO0FBckJWO0FBMkJBO0VBQ0UsV0FBQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUF4Qko7QUF5Qkk7RUFDRSxXQUFBO0VBQ0YsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUF2Qko7QUEwQkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF2QkY7QUF3QkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUF0Qko7QUF3QkU7RUFDRSxjQUFBO0FBdEJKO0FBd0JFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXRCSjtBQXdCTTtFQUNFLGVBQUE7QUF0QlI7QUF1QlE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBckJWO0FBdUJRO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBckJWO0FBMEJFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXhCSjtBQTJCQTtFQUNFLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtRUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtBQXhCSiIsImZpbGUiOiJkZXZpY2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1ncmlkIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLy9tYXgtaGVpZ2h0OjYzMHB4O1xyXG4gIC8vbWluLWhlaWdodDogMzUzcHg7XHJcbiAgLy9vdmVyZmxvdzogc2Nyb2xsO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6NjMwcHg7XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICB9XHJcbiAgJjpob3Zlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgLy9ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4gIHRoZWFkIHtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDk4O1xyXG4gICAgLy93aWR0aDogY2FsYygxMDAlIC0gNnB4KSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgdHIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIHRoIHtcclxuICAgICAgICBoZWlnaHQ6NTZweDtcclxuICAgICAgICB3aWR0aDoyNSU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY2NpZC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwIDAgMCAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zb3J0LWNvbHVtbiB7XHJcbiAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0aGVhZCwgdGJvZHkgdHIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgdGJvZHkge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8vbWFyZ2luOiA1NnB4IDAgMDtcclxuICAgIC8vei1pbmRleDo5NztcclxuICB9XHJcbn1cclxuLnRhYmxlLWdyaWQge1xyXG4gIC8vIENlbGxzXHJcbiAgPiB0aGVhZCxcclxuICA+IHRib2R5LFxyXG4gID4gdGZvb3Qge1xyXG4gICAgPiB0ciB7XHJcbiAgICAgID4gdGgsXHJcbiAgICAgID4gdGQge1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgPiB0aGVhZCA+IHRyID4gdGgge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC8vYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzE0NjVCO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDoyMnB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6MCAxNXB4O1xyXG4gICAgaGVpZ2h0OjQycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAmLm5vQm9yZGVyQm90dG9tIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgPiB0Ym9keSA+IHRyID4gdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNkOGRhZGE7XHJcbiAgICBjb2xvcjojMDAwO1xyXG4gICAgcGFkZGluZzogMCAxMnB4IDAgMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgPiB0Ym9keSA+IHRyIHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbiAgfVxyXG4gIHRib2R5IHtcclxuICAgIHRyIHtcclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDojZjZmNmY2O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udG9wLWhlYWRlciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMTIwcHgpO1xyXG4gICAgYmFja2dyb3VuZDogIzBkNmVmZDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC02MHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgNTBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAtOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHggMCAwO1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOjVweCAxMnB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czo2cHg7XHJcbiAgICB9XHJcbn1cclxuLmRldmllbGlzdCB7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46OTBweCAwIDYwcHg7XHJcbiAgaDQge1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE2cHg7XHJcbiAgICBjb2xvcjogIzMxNDY1QjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuZGV2aWNlLWNvdW50IHtcclxuICAgIGNvbG9yOiAjRUQwMzAyO1xyXG4gIH1cclxuICAuY29tcGFueS1kZXRhaWxzIHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luOjAgMCA3MHB4IDA7XHJcbiAgICAubGlzdC1ncm91cCB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzE0NjVCO1xyXG4gICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMzE0NjVCO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgd2lkdGg6MjQlO1xyXG4gICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50YWJsZXMge1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG59XHJcbi5idG4tYWRkLWRldmljZXMge1xyXG4gIHBhZGRpbmc6OHB4IDEycHggOHB4IDM1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQgOiAjMGQ2ZWZkIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wbHVzLWxhcmdlLXdoaXRlLnN2ZycpIDEycHggMTBweCBuby1yZXBlYXQ7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTdweDtcclxuICBib3JkZXItcmFkaXVzOjZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xNXB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map