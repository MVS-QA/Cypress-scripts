describe('Проверка покупки нового аватара', function () {   // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');    // переходим на сайт 
         cy.get('#k_email').type('USER_LOGIN');    // вводим логин
         cy.get('#k_password').type('USER_PASSWORD');  // вводим пароль
         cy.get('.MuiButton-root').click();   // нажимаем кнопку Подтвердить
         cy.wait(3000);//ждем проверки логина и пароля
         cy.get('.header_card_trainer_id_num').click(); // Клик в шапке на аву тренера
         cy.wait(2000);//ждем
         cy.get('[data-qa="shop"]').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // кликаем Купить у первого доступного аватара
         cy.get('.card_number').type('5432543254325430'); // вводим номер карты
         cy.get('.card_csv').type('125');      // вводим CVV карты
         cy.get('.card_date').type('1025');   // вводим срок действия карты
         cy.get('.card_name').type('MVS');  // вводим имя владельца действия карты
         cy.wait(5000)//Ждем валидацию данных карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();// нажимаем кнопку Оплатить
         //cy.wait(5000);
         cy.get('.threeds_number').type('56456');   // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();  // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');  // проверяем наличие и видимость сообщения об успешной покупке
     });
 });