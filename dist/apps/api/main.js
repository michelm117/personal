(()=>{"use strict";var __webpack_modules__={454:(__unused_webpack_module,exports,__webpack_require__)=>{var _a,_b,_c;Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppController=void 0;const tslib_1=__webpack_require__(752),mailer_1=__webpack_require__(138),common_1=__webpack_require__(481),nestjs_real_ip_1=__webpack_require__(175),message_dto_1=__webpack_require__(21),config_1=__webpack_require__(793);let AppController=class AppController{constructor(mailService,configService){this.mailService=mailService,this.configService=configService}sendEmail(messageDto,ip){return tslib_1.__awaiter(this,void 0,void 0,(function*(){yield this.mailService.sendMail({to:"marc@michel.lu",from:this.configService.get("MAIL_FROM"),subject:"Contact - Portfolio",text:`${messageDto.subject}\n\n${messageDto.message}\n\n${messageDto.name} - ${messageDto.email} - ${ip}`})}))}};tslib_1.__decorate([(0,common_1.HttpCode)(200),(0,common_1.Post)("sendEmail"),tslib_1.__param(0,(0,common_1.Body)()),tslib_1.__param(1,(0,nestjs_real_ip_1.RealIP)()),tslib_1.__metadata("design:type",Function),tslib_1.__metadata("design:paramtypes",["function"==typeof(_a=void 0!==message_dto_1.MessageDto&&message_dto_1.MessageDto)?_a:Object,String]),tslib_1.__metadata("design:returntype",Promise)],AppController.prototype,"sendEmail",null),AppController=tslib_1.__decorate([(0,common_1.Controller)(),tslib_1.__metadata("design:paramtypes",["function"==typeof(_b=void 0!==mailer_1.MailerService&&mailer_1.MailerService)?_b:Object,"function"==typeof(_c=void 0!==config_1.ConfigService&&config_1.ConfigService)?_c:Object])],AppController),exports.AppController=AppController},292:(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.AppModule=void 0;const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),app_controller_1=__webpack_require__(454),config_1=__webpack_require__(793),Joi=__webpack_require__(414),mailer_1=__webpack_require__(138),serve_static_1=__webpack_require__(385),path_1=__webpack_require__(17);let AppModule=class AppModule{};AppModule=tslib_1.__decorate([(0,common_1.Module)({imports:[serve_static_1.ServeStaticModule.forRoot({rootPath:(0,path_1.join)(__dirname,"..","portfolio"),exclude:["/api*"]}),config_1.ConfigModule.forRoot({isGlobal:!0,validationSchema:Joi.object({MAIL_HOST:Joi.string().required(),MAIL_USER:Joi.string().required(),MAIL_PASSWORD:Joi.string().required(),MAIL_FROM:Joi.string().required(),PORT:Joi.number()})}),mailer_1.MailerModule.forRootAsync({useFactory:config=>tslib_1.__awaiter(void 0,void 0,void 0,(function*(){return{transport:{host:config.get("MAIL_HOST"),secure:!1,auth:{user:config.get("MAIL_USER"),pass:config.get("MAIL_PASSWORD")}}}})),inject:[config_1.ConfigService]})],controllers:[app_controller_1.AppController],providers:[]})],AppModule),exports.AppModule=AppModule},21:(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.MessageDto=void 0;exports.MessageDto=class MessageDto{}},414:module=>{module.exports=require("@hapi/joi")},138:module=>{module.exports=require("@nestjs-modules/mailer")},481:module=>{module.exports=require("@nestjs/common")},793:module=>{module.exports=require("@nestjs/config")},143:module=>{module.exports=require("@nestjs/core")},385:module=>{module.exports=require("@nestjs/serve-static")},175:module=>{module.exports=require("nestjs-real-ip")},752:module=>{module.exports=require("tslib")},17:module=>{module.exports=require("path")}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}var __webpack_exports__={};(()=>{var exports=__webpack_exports__;Object.defineProperty(exports,"__esModule",{value:!0});const tslib_1=__webpack_require__(752),common_1=__webpack_require__(481),core_1=__webpack_require__(143),app_module_1=__webpack_require__(292);!function(){tslib_1.__awaiter(this,void 0,void 0,(function*(){const app=yield core_1.NestFactory.create(app_module_1.AppModule);app.setGlobalPrefix("api");const port=process.env.PORT||3333;yield app.listen(port),common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/api`)}))}()})();var __webpack_export_target__=exports;for(var i in __webpack_exports__)__webpack_export_target__[i]=__webpack_exports__[i];__webpack_exports__.__esModule&&Object.defineProperty(__webpack_export_target__,"__esModule",{value:!0})})();
//# sourceMappingURL=main.js.map