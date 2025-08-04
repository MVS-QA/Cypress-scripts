import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"
import * as data from "../helpers/default_data.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
         cy.visit('/'); //заходим на сайт
         cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');//цвет кнопки "Восстановить пароль" синий
           });

    afterEach('Конец теста', function () {
         cy.get(result_page.close).should('be.visible');//крестик виден пользователю
         cy.get(result_page.title).should('be.visible');//текст виден пользователю 
        });
        
    //1)       
    it('Верный пароль и верный логин', function () {
        cy.get(main_page.email).type(data.login); //ввести верный логин
        cy.get(main_page.password).type(data.password);//ввести верный пароль
        cy.get(main_page.login_button).click();//нажать кнопку Войти
        
        cy.get(result_page.title).contains('Авторизация прошла успешно');//текст после нажатия
                                     
    })


    //2)
    it('Восстановить пароль', function () {
        cy.get(main_page.fogot_pass_btn).click();//нажали кнопку Забыли пароль
        cy.get(recovery_password_page.email).type('german@dolnikov.ru');//написали новый емейл
        cy.get(recovery_password_page.send_button).click();//нажали кнопку Отправить код

        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail');//Увидели надпись об успешной отправке
                        
    })

    //3)
    it('Правильный логин, неправильный пароль', function () {
        cy.get(main_page.email).type(data.login); //ввести верный логин
        cy.get(main_page.password).type('iLoveqastudio11');//ввести неверный пароль
        cy.get(main_page.login_button).click();//нажать кнопку Войти
        
        cy.get(result_page.title).contains('Такого логина или пароля нет');//текст после нажатия
                       
    })

    //4)

   it('Неправильный логин, правильный пароль', function () {
        cy.get(main_page.email).type('g@d.com'); //ввести неверный логин
        cy.get(main_page.password).type(data.password);//ввести верный пароль
        cy.get(main_page.login_button).click();//нажать кнопку Войти
        
        cy.get(result_page.title).contains('Такого логина или пароля нет');//текст после нажатия
                            
    })

    //5 
    it('Валидация, нет @', function () {
        cy.get(main_page.email).type('gd.com'); //ввести логин без @
        cy.get(main_page.password).type(data.password);//ввести верный пароль
        cy.get(main_page.login_button).click();//нажать кнопку Войти
        
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');//текст после нажатия
                            
    })


    6//
    it('Приведение логина к строчным буквам', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); //ввести логин без @
        cy.get(main_page.password).type(data.password);//ввести верный пароль
        cy.get(main_page.login_button).click();//нажать кнопку Войти
        
        cy.get(result_page.title).contains('Авторизация прошла успешно');//текст после нажатия
                                
    })

}
)

