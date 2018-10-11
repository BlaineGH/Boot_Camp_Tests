webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var product_new_component_1 = __webpack_require__("./src/app/product/product-new/product-new.component.ts");
var product_edit_component_1 = __webpack_require__("./src/app/product/product-edit/product-edit.component.ts");
var product_list_component_1 = __webpack_require__("./src/app/product/product-list/product-list.component.ts");
var product_show_component_1 = __webpack_require__("./src/app/product/product-show/product-show.component.ts");
var routes = [
    { path: "", redirectTo: "products", pathMatch: "full" },
    { path: "products", component: product_list_component_1.ProductListComponent },
    { path: "new", redirectTo: "products/new", pathMatch: "full" },
    { path: "products/new", component: product_new_component_1.ProductNewComponent },
    { path: "edit/:id", redirectTo: "products/edit/:id", pathMatch: "full" },
    { path: "products/edit/:id", component: product_edit_component_1.ProductEditComponent },
    { path: "products/details/:id", redirectTo: "products/:id", pathMatch: "full" },
    { path: "products/:id", component: product_show_component_1.ProductShowComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div>\n  <h1>\n  \t{{ title }}\n  </h1>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Commerce Manager';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var product_service_1 = __webpack_require__("./src/app/product/product.service.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var product_component_1 = __webpack_require__("./src/app/product/product.component.ts");
var product_list_component_1 = __webpack_require__("./src/app/product/product-list/product-list.component.ts");
var product_new_component_1 = __webpack_require__("./src/app/product/product-new/product-new.component.ts");
var product_edit_component_1 = __webpack_require__("./src/app/product/product-edit/product-edit.component.ts");
var product_show_component_1 = __webpack_require__("./src/app/product/product-show/product-show.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product_component_1.ProductComponent,
                product_list_component_1.ProductListComponent,
                product_new_component_1.ProductNewComponent,
                product_edit_component_1.ProductEditComponent,
                product_show_component_1.ProductShowComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                forms_1.FormsModule,
            ],
            providers: [product_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.css":
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\n\tborder: solid black 2px;\r\n\tpadding:2%;\r\n}\r\nh1{\r\n\tvertical-align: top;\r\n}\r\nsmall{\r\n\tcolor: purple;\r\n\tvertical-align: top;\r\n\tfont-size: 20px;\r\n}\r\nlabel{\r\n\tcolor: lightgrey;\r\n\ttext-align: left;\r\n\tfont-size:30px;\r\n\t/*margin-bottom: -25px;*/\r\n}\r\n.input{\r\n\tdisplay: block;\r\n\tmargin-left: 45%;\r\n}\r\n#buttons{\r\n\tmargin-left: 45%;\r\n\tpadding: 1%;\r\n}\r\nbutton{\r\n\tbackground-color: red;\r\n\tborder:solid darkred;\r\n}\r\n.buttons{\r\n\tpadding:10px;\r\n}"

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\t\n\t<h1>Update Product</h1>\n\t<small\n\t\t[hidden]=\"name.valid || (name.untouched && !form.submitted)\">\n\t\tName must be more than 3 characters\n\t</small>\n\t<small\n\t\t[hidden]=\"qty.valid || (qty.untouched && !form.submitted)\">\n\t\tQuantity needs a value, if it's 0 you can delete it\n\t</small>\n\t<small\n\t\t[hidden]=\"price.valid || (price.untouched && !form.submitted)\">\n\t\tPrice must be greater than 0\n\t</small>\n\t<form (submit)=\"editProduct($event)\" #form=\"ngForm\">\n\t\t<label>Name</label>\n\t\t<input class=\"input\" \n\t\ttype=\"text\" \n\t\tname=\"name\" \n\t\t[(ngModel)]=\"product.name\"\n\t\t#name = \"ngModel\"\n\t\tminlength=\"3\"\n\t\trequired \n\t\t>\n\t\t<label>Qty</label>\n\t\t<input class=\"input\"\n\t\ttype=\"number\" \n\t\tname=\"qty\" \n\t\t[(ngModel)]=\"product.qty\"\n\t\t#qty = \"ngModel\"\n\t\trequired \n\t\t>\n\t\t<label>Price</label>\n\t\t<input class=\"input\"\n\t\ttype=\"number\" \n\t\tname=\"price\" \n\t\t[(ngModel)]=\"product.price\"\n\t\t#price = \"ngModel\"\n\t\tmin = \"1\"\n\t\trequired \n\t\t>\n\t\t<div id=\"buttons\">\n\t\t\t<button class=\"buttons\" [routerLink]=\"['']\">RESET</button>\n\t\t\t<input class=\"buttons\" style=\"background-color: lightgreen\" type=\"submit\" value=\"UPDATE\">\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product/product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(_productservice, _route, _router) {
        this._productservice = _productservice;
        this._route = _route;
        this._router = _router;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.getProduct();
        this.error = "";
        this.product = {};
    };
    ProductEditComponent.prototype.getProduct = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var observable = _this._productservice.getProduct(params.id);
            observable.subscribe(function (data) {
                console.log(data.json());
                _this.product = data.json();
            }, function (err) {
                _this.error = err.json().err;
            });
        });
    };
    ProductEditComponent.prototype.editProduct = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.product);
        var observable = this._productservice.updateProduct(this.product);
        observable.subscribe(function (res) {
            _this.product = {};
            _this._router.navigate(['']);
        }, function (err) {
            _this.error = err.json().err;
        });
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'app-product-edit',
            template: __webpack_require__("./src/app/product/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("./src/app/product/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;


/***/ }),

/***/ "./src/app/product/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = "th{\r\n\tbackground-color: grey;\r\n\tborder: solid black 2px;\r\n}\r\ntr{\r\n\tborder: solid black 2px;\r\n}\r\ntable{\r\n\twidth: 100%;\r\n\tborder-style: black;\r\n}\r\nbutton{\r\n\tdisplay: inline-block;\r\n\tcolor: white;\r\n}\r\n.inlineblock{\r\n\tdisplay: inline-block;\r\n}\r\n.greenbutton{\r\n\tbackground-color: darkgreen;\r\n\tvertical-align: top;\r\n\tmargin-left: 65%;\r\n}\r\n.redbutton{\r\n\tbackground-color: red;\r\n}\r\n.goldbutton{\r\n\tbackground-color: gold;\r\n}\r\ntd{\r\n\twidth:20%;\r\n\ttext-align: center;\r\n\tborder: solid black 2px;\r\n}\r\n#wrapper{\r\n\tborder: solid black 2px;\r\n\tpadding:2%;\r\n}"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<div class=\"inlineblock\">\n\t<h1>Product List</h1>\n\t</div>\n\t<button class=\"greenbutton\" [routerLink]=\"['new']\">Add New Product</button>\n\t<table>\n\t\t<tr>\n\t\t\t<th>\n\t\t\t\tid\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tName\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tQty\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tPrice\n\t\t\t</th>\n\t\t\t<th>\n\t\t\t\tActions\n\t\t\t</th>\n\t\t</tr>\n\t\t<tr *ngFor=\"let i of productlist\">\n\t\t\t<td>\n\t\t\t\t{{i._id}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{i.name}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{i.qty}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t{{i.price}}\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class=\"goldbutton\" [routerLink]=\"['edit/', i._id]\">Edit</button>\n\t\t\t\t<button class=\"redbutton\" [routerLink]=\"['details', i._id]\">Details</button>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</div>"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product/product.service.ts");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_productservice) {
        this._productservice = _productservice;
        this.productlist = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getAllProducts();
    };
    ProductListComponent.prototype.getAllProducts = function () {
        var _this = this;
        console.log(this);
        var observable = this._productservice.getAllProducts();
        observable.subscribe(function (data) {
            console.log(data.json());
            _this.productlist = data.json();
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            template: __webpack_require__("./src/app/product/product-list/product-list.component.html"),
            styles: [__webpack_require__("./src/app/product/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;


/***/ }),

/***/ "./src/app/product/product-new/product-new.component.css":
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\n\tborder:solid black 2px;\r\n\tpadding: 2%;\r\n}\r\nh1{\r\n\tvertical-align: top;\r\n}\r\nsmall{\r\n\tcolor: purple;\r\n\tvertical-align: top;\r\n\tfont-size: 20px;\r\n}\r\nlabel{\r\n\tcolor: lightgrey;\r\n\ttext-align: left;\r\n\tfont-size:30px;\r\n\t/*margin-bottom: -25px;*/\r\n}\r\n.input{\r\n\tdisplay: block;\r\n\tmargin-left: 45%;\r\n}\r\n#buttons{\r\n\tmargin-left: 45%;\r\n\tpadding: 1%;\r\n}\r\nbutton{\r\n\tbackground-color: red;\r\n\tborder:solid darkred;\r\n}\r\n.buttons{\r\n\tpadding:10px;\r\n}"

/***/ }),

/***/ "./src/app/product/product-new/product-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<h1>New Product</h1>\n\t<small\n\t\t[hidden]=\"name.valid || (name.untouched && !form.submitted)\">\n\t\tName must be more than 3 characters |\n\t</small>\n\t<small\n\t\t[hidden]=\"qty.valid || (qty.untouched && !form.submitted)\">\n\t\tQuantity must be greater than 0 |\n\t</small>\n\t<small\n\t\t[hidden]=\"price.valid || (price.untouched && !form.submitted)\">\n\t\tPrice must be greater than 0\n\t</small>\n\t<form (submit)=\"addProduct($event)\" #form=\"ngForm\">\n\t\t<label>Name</label>\n\t\t<input class=\"input\" \n\t\ttype=\"text\" \n\t\tname=\"name\" \n\t\t[(ngModel)]=\"new_product.name\"\n\t\t#name = \"ngModel\"\n\t\tminlength=\"3\"\n\t\trequired \n\t\t>\n\t\t<label>Qty</label>\n\t\t<input class=\"input\"\n\t\ttype=\"number\" \n\t\tname=\"qty\" \n\t\t[(ngModel)]=\"new_product.qty\"\n\t\t#qty = \"ngModel\"\n\t\tmin=\"1\" \n\t\trequired \n\t\t>\n\t\t<label>Price</label>\n\t\t<input class=\"input\"\n\t\ttype=\"number\" \n\t\tname=\"price\" \n\t\t[(ngModel)]=\"new_product.price\"\n\t\t#price = \"ngModel\"\n\t\tmin = \"1\"\n\t\trequired \n\t\t>\n\t\t<div id=\"buttons\">\n\t\t\t<button class=\"buttons\" [routerLink]=\"['']\">RESET</button>\n\t\t\t<input class=\"buttons\" style=\"background-color: lightblue\" [disabled]=\"!form.valid\" type=\"submit\" value=\"CREATE\">\n\t\t</div>\n\t</form>\n\t{{error}}\n</div>"

/***/ }),

/***/ "./src/app/product/product-new/product-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var product_service_1 = __webpack_require__("./src/app/product/product.service.ts");
var ProductNewComponent = /** @class */ (function () {
    function ProductNewComponent(_productservice, _route, _router) {
        this._productservice = _productservice;
        this._route = _route;
        this._router = _router;
    }
    ProductNewComponent.prototype.ngOnInit = function () {
        this.new_product = {};
        this.error = "";
    };
    ProductNewComponent.prototype.addProduct = function () {
        var _this = this;
        event.preventDefault();
        console.log(this.new_product);
        var obseravble = this._productservice.newProduct(this.new_product);
        obseravble.subscribe(function (res) {
            console.log(res.json());
            _this.new_product = {};
            _this._router.navigate(['']);
        }, function (err) {
            _this.error = err.json().err;
        });
    };
    ProductNewComponent = __decorate([
        core_1.Component({
            selector: 'app-product-new',
            template: __webpack_require__("./src/app/product/product-new/product-new.component.html"),
            styles: [__webpack_require__("./src/app/product/product-new/product-new.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ProductNewComponent);
    return ProductNewComponent;
}());
exports.ProductNewComponent = ProductNewComponent;


/***/ }),

/***/ "./src/app/product/product-show/product-show.component.css":
/***/ (function(module, exports) {

module.exports = "#wrapper{\r\n\tborder: solid black 2px;\r\n}\r\nh1{\r\n\tvertical-align: top;\r\n}\r\nsmall{\r\n\tcolor: purple;\r\n\tvertical-align: top;\r\n\tfont-size: 20px;\r\n}\r\nh2{\r\n\tcolor: lightgrey;\r\n\ttext-align: left;\r\n\tfont-size:30px;\r\n\t/*margin-bottom: -25px;*/\r\n\tmargin-bottom: -30px;\r\n}\r\np{\r\n\tdisplay:block;\r\n\tmargin-left: 45%;\r\n\tfont-size: 20px;\r\n}\r\n.lightredbutton{\r\n\tbackground-color: red;\r\n\tborder: solid darkred;\r\n\tmargin-left: 40%;\r\n}\r\n.redbutton{\r\n\tbackground-color: darkred;\r\n\tcolor: white;\r\n}\r\nbutton{\r\n\tpadding: 15px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/product/product-show/product-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<h1>Product Details</h1>\n\t<small\n\t\t[hidden]=\"product.qty < 0\">\n\t\tQuantity must be 0 to delete it\n\t</small>\n\t<h2>Name</h2>\n\t<p>{{product.name}}</p>\n\t<h2>Qty</h2>\n\t<p>{{product.qty}}</p>\n\t<h2>Price</h2>\n\t<p>${{product.price}}</p>\n\t<button class=\"lightredbutton\" [routerLink]=\"['']\">BACK</button>\n\t<button class=\"redbutton\" [disabled]=\"product.qty > 0\" (click)=\"onDelete($event)\">DELETE</button>\n</div>"

/***/ }),

/***/ "./src/app/product/product-show/product-show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product/product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductShowComponent = /** @class */ (function () {
    function ProductShowComponent(_productservice, _route, _router) {
        this._productservice = _productservice;
        this._route = _route;
        this._router = _router;
    }
    ProductShowComponent.prototype.ngOnInit = function () {
        this.getProduct();
        this.error = "";
        this.product = {};
    };
    ProductShowComponent.prototype.getProduct = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var observable = _this._productservice.getProduct(params.id);
            observable.subscribe(function (data) {
                console.log(data.json());
                _this.product = data.json();
            }, function (err) {
                _this.error = err.json().err;
            });
        });
    };
    ProductShowComponent.prototype.onDelete = function (event) {
        var _this = this;
        event.preventDefault();
        var observable = this._productservice.deleteProduct(this.product);
        observable.subscribe(function (res) {
            _this.getProduct();
            _this.product = {};
            _this._router.navigate(['']);
        });
    };
    ProductShowComponent = __decorate([
        core_1.Component({
            selector: 'app-product-show',
            template: __webpack_require__("./src/app/product/product-show/product-show.component.html"),
            styles: [__webpack_require__("./src/app/product/product-show/product-show.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ProductShowComponent);
    return ProductShowComponent;
}());
exports.ProductShowComponent = ProductShowComponent;


/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<app-product-list></app-product-list>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "./src/app/product/product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.getAllProducts = function () {
        return this._http.get("/products");
    };
    ProductService.prototype.getProduct = function (id) {
        return this._http.get("/products/" + id);
    };
    ProductService.prototype.newProduct = function (newproduct) {
        return this._http.post("/products", newproduct);
    };
    ProductService.prototype.deleteProduct = function (product) {
        return this._http.delete("/products/" + product._id);
    };
    ProductService.prototype.updateProduct = function (product) {
        return this._http.patch("/products/" + product._id, product);
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map