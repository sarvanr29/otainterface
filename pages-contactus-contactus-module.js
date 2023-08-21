(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contactus-contactus-module"],{

/***/ "R9TQ":
/*!********************************************************!*\
  !*** ./src/app/pages/contactus/contactus.component.ts ***!
  \********************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class ContactusComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 35, vars: 0, consts: [[1, "contact"], [1, "text-contact"], [1, "signup-form"], [1, "form-input"], [1, "form-group"], ["type", "text", "placeholder", ""], ["type", "password", "placeholder", ""], [1, "form-group", "buttons"], [1, "btn", "btn-primary"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "How can we help you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Feel free to share your feedback and questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phone number (Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".contact[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  padding-left: 10%;\n  background: url('contact-bg.png') no-repeat 10% 75%;\n  background-size: 50%;\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n.contact[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%] {\n  float: right;\n  width: 500px;\n  height: auto;\n  background: #fff;\n  padding: 25px 40px;\n  box-shadow: 0 3px 10px #939595;\n  border-radius: 10px;\n  margin-right: 70px;\n}\n.contact[_ngcontent-%COMP%]   .signup-form[_ngcontent-%COMP%]   .checkbox-btn[_ngcontent-%COMP%] {\n  margin: 40px 0;\n  clear: both;\n}\n.contact[_ngcontent-%COMP%]   .text-contact[_ngcontent-%COMP%] {\n  float: left;\n  margin: 5% 0 0;\n}\n.contact[_ngcontent-%COMP%]   .text-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"arlrdbd\";\n  font-size: 28px;\n  color: #22b573;\n  margin: 0;\n}\n.contact[_ngcontent-%COMP%]   .text-contact[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"MontserratSemiBold\";\n  color: #666;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBREk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQUdOO0FBQUU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUVKO0FBREk7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUdOO0FBREk7RUFDRSxpQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBR04iLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3Qge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBwYWRkaW5nLWxlZnQ6MTAlO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NvbnRhY3QtYmcucG5nKSBuby1yZXBlYXQgMTAlIDc1JTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcclxuICBwYWRkaW5nLXRvcDo1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjUwcHg7XHJcbiAgLnNpZ251cC1mb3JtIHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzoyNXB4IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4ICM5Mzk1OTU7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NzBweDtcclxuICAgIC5jaGVja2JveC1idG4ge1xyXG4gICAgICBtYXJnaW46NDBweCAwO1xyXG4gICAgICBjbGVhcjogYm90aDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtY29udGFjdCB7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luOjUlIDAgMDtcclxuICAgIHAge1xyXG4gICAgICBmb250LWZhbWlseTogJ2FybHJkYmQnO1xyXG4gICAgICBmb250LXNpemU6MjhweDtcclxuICAgICAgY29sb3I6IzIyYjU3MztcclxuICAgICAgbWFyZ2luOjA7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0U2VtaUJvbGQnO1xyXG4gICAgICBjb2xvcjojNjY2O1xyXG4gICAgICBmb250LXNpemU6MThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "h8FD":
/*!*****************************************************!*\
  !*** ./src/app/pages/contactus/contactus.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusModule", function() { return ContactusModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _contactus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactus.component */ "R9TQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '',
        component: _contactus_component__WEBPACK_IMPORTED_MODULE_2__["ContactusComponent"]
    }
];
class ContactusModule {
}
ContactusModule.ɵfac = function ContactusModule_Factory(t) { return new (t || ContactusModule)(); };
ContactusModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ContactusModule });
ContactusModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContactusModule, { declarations: [_contactus_component__WEBPACK_IMPORTED_MODULE_2__["ContactusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-contactus-contactus-module.js.map