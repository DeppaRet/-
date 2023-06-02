function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Функция, которая делает интерактивный вывод в блок терминала
if (document.getElementsByClassName('demo').length > 0) {
  var i = 0;
  var rnd = getRandomInt(3);
  if (rnd == 1) {
    var txt = `Веб-сайт выполнен в рамках курсового проекта по предмету "Разработка веб-приложений" 
            и представляет краткую справку к программе для перенастройки системы управления сталеплавильным конвертером

            Содержимое сайта представлено в левой части экрана
            - Предметная область
            - Основные функции
            - Модель взаимодействия с БД
            - Тестовые примеры
            - Об авторе

            ###python login code

            self.getSettings()
            msg = QMessageBox()
            login = self.LoginLine.text()
            password = self.PasswordLine.text()
            password = hashAuth.Hash.getHash(password)
            usersDB = mc.connect(
              \t\thost=DBhost,
              \t\tuser=DBlogin,
              \t\tpassword=DBpass,
              \t\tdatabase="users_db"
            )
            result = ""
            mycursor = usersDB.cursor()
            query = "SELECT Roles_idRoles FROM users where Login like '" + login + "' AND Password Like '" + password + "';"
            mycursor.execute(query)
            result = mycursor.fetchone()[0]
            if result == None:
                msg.setIcon(QMessageBox.Critical)
                msg.setText("Внимание")
                msg.setInformativeText('Неверный логин или пароль')
                msg.setWindowTitle("Ошибка")
                msg.exec_()

            elif result == 1:
                self.window = QtWidgets.QMainWindow()
                # self.window.setWindowModality(QtCore.Qt.WindowModal)
                self.ui = AdminForm.Ui_AdminFom()
                # self.ui.administrate.isEnabled(True)
                self.ui.setupUi(self.window)
                self.window.show()
            elif result == 2:
                # msg.setInformativeText('Логин в качестве оператора')
                # msg.setWindowTitle("Успех")
                # msg.exec_()
                self.window = QtWidgets.QMainWindow()
                # self.window.setWindowModality(QtCore.Qt.WindowModal)
                self.ui = OperForm.Ui_OperatorForm()
                self.ui.setupUi(self.window)
                self.window.show()
            elif result == 3:
                # msg.setInformativeText('Логин в качестве разработчика модели')
                # msg.setWindowTitle("Успех")
                # msg.exec_()
                self.window = QtWidgets.QMainWindow()
                # self.window.setWindowModality(QtCore.Qt.WindowModal)
                self.ui = DeveloperForm.Ui_Form()
                self.ui.setupUi(self.window)
                self.window.show()`;
  }
  else if (rnd == 2) {
    var txt = `Веб-сайт выполнен в рамках курсового проекта по предмету 
            "Разработка веб-приложений" и представляет краткую справку к программе
            для перенастройки системы управления сталеплавильным конвертером

            Содержимое сайта представлено в левой части экрана
            - Предметная область
            - Основные функции
            - Модель взаимодействия с БД
            - Тестовые примеры
            - Об авторе

            ###python hash code
            import hashlib

            class Hash(object):
                status = ""
            
                def getHash(tmp):
                    #password = code.readline()
                    global encrypt
                    result = hashlib.md5(tmp.encode())
                    return result.hexdigest()`;
  }
  else if (rnd == 0) {
    var txt = `Веб-сайт выполнен в рамках курсового проекта по предмету 
            "Разработка веб-приложений" и представляет краткую справку к программе
            для перенастройки системы управления сталеплавильным конвертером

            Содержимое сайта представлено в левой части экрана
            - Предметная область
            - Основные функции
            - Модель взаимодействия с БД
            - Тестовые примеры
            - Об авторе

            ###python Metal Charge Calculation code
            def calcMetalChargeClicked(self):
            try:
                castSteelWeightValue = float(self.castWeight.text())
                castSteelTemperatureValue = float(self.castTemperature.text())
                castSteelCarbonValue = float(self.castCarbon.text())
                castSteelSerumValue = float(self.castSerum.text())
                castSteelSiliconValue = float(self.castSilicon.text())
                castSteelPhosphorValue = float(self.castPhosphor.text())
                castSteelManganeseValue = float(self.castManganese.text())
    
                scrapCarbonValue = float(self.scrapCarbon.text())
                scrapSerumValue = float(self.scrapSerum.text())
                scrapSiliconValue = float(self.scrapSilicon.text())
                scrapPhosphorValue = float(self.scrapPhosphor.text())
                scrapWeightValue = float(self.scrapWeight.text())
                scrapManganeseValue = float(self.scrapManganese.text())
    
                totalWeightValue = castSteelWeightValue + scrapWeightValue
    
                carbonChem = (castSteelCarbonValue * castSteelWeightValue + scrapCarbonValue * scrapWeightValue)/totalWeightValue
                chemSerum = (castSteelSerumValue * castSteelWeightValue + scrapSerumValue * scrapWeightValue)/totalWeightValue
                chemPhosphor = (castSteelPhosphorValue * castSteelWeightValue + scrapPhosphorValue * scrapWeightValue)/totalWeightValue
                chemSilicon = (castSteelSiliconValue * castSteelWeightValue + scrapSiliconValue * scrapWeightValue)/totalWeightValue
                chemManganese = (castSteelManganeseValue * castSteelWeightValue + scrapManganeseValue * scrapWeightValue)/totalWeightValue
    
                # carbonChem = (castSteelCarbonValue * castSteelWeightValue + scrapCarbonValue * scrapWeightValue) / totalWeightValue
                # chemSerum = (castSteelSerumValue * castSteelWeightValue + scrapSerumValue * scrapWeightValue) / totalWeightValue
                # chemPhosphor = (castSteelPhosphorValue * castSteelWeightValue + scrapPhosphorValue * scrapWeightValue) / totalWeightValue
                # chemSilicon = (castSteelSiliconValue * castSteelWeightValue + scrapSiliconValue * scrapWeightValue) / totalWeightValue
                # chemManganese = (castSteelManganeseValue * castSteelWeightValue + scrapManganeseValue * scrapWeightValue) / totalWeightValue
    
                self.MetalCharge.setText(str(round(totalWeightValue, 3)))
                self.ChemCarbon.setText(str(round(carbonChem, 3)))
                self.ChemSerum.setText(str(round(chemSerum,3)))
                self.ChemPhosphor.setText(str(round(chemPhosphor,3)))
                self.ChemManganese.setText(str(round(chemManganese,3)))
                self.ChemSilicon.setText(str(round(chemSilicon,3)))
                global metalChargeCalcked
                metalChargeCalcked = True
    
            except Exception as err:  # mc.Error
                msg = QMessageBox()
                msg.setIcon(QMessageBox.Critical)
                msg.setWindowTitle("Ошибка")
                msg.setText("Внимание")
                msg.setInformativeText("Проверьте введенные данные! {0}".format(err))
                # msg.setInformativeText("Error: {0}".format(err))
                msg.exec_()
            return`;
  }

  var speed = 35;

  function typeItOut() {
    if (i < txt.length) {
      document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeItOut, speed);
    }
  }

  setTimeout(typeItOut, 1800);
}








