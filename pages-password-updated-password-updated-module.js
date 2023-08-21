(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-password-updated-password-updated-module"],{

/***/ "6zhk":
/*!**********************************************************************!*\
  !*** ./src/app/pages/password-updated/password-updated.component.ts ***!
  \**********************************************************************/
/*! exports provided: PasswordUpdatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordUpdatedComponent", function() { return PasswordUpdatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class PasswordUpdatedComponent {
    constructor() { }
    ngOnInit() {
    }
}
PasswordUpdatedComponent.ɵfac = function PasswordUpdatedComponent_Factory(t) { return new (t || PasswordUpdatedComponent)(); };
PasswordUpdatedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordUpdatedComponent, selectors: [["app-password-updated"]], decls: 2, vars: 0, template: function PasswordUpdatedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "password-updated works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzd29yZC11cGRhdGVkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "l2xF":
/*!*******************************************************************!*\
  !*** ./src/app/pages/password-updated/password-updated.module.ts ***!
  \*******************************************************************/
/*! exports provided: PasswordUpatedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordUpatedModule", function() { return PasswordUpatedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _password_updated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-updated.component */ "6zhk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '',
        component: _password_updated_component__WEBPACK_IMPORTED_MODULE_2__["PasswordUpdatedComponent"]
    }
];
class PasswordUpatedModule {
}
PasswordUpatedModule.ɵfac = function PasswordUpatedModule_Factory(t) { return new (t || PasswordUpatedModule)(); };
PasswordUpatedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PasswordUpatedModule });
PasswordUpatedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PasswordUpatedModule, { declarations: [_password_updated_component__WEBPACK_IMPORTED_MODULE_2__["PasswordUpdatedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-password-updated-password-updated-module.js.map