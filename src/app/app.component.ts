import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  password: string = ''
  useLetters: boolean = true
  useNumbers: boolean = true
  useSymbols:boolean = true
  passwordLength: number = 8
  buttonDisabled: boolean = false
  selectSomething: boolean = false

  onClick(){
    const letters = 'qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM'
    const numbers = '01234567890123456789'
    const symbols = '~!@#$%^&*()_+-{}|:<>?~!@#$%^&*()_+-{}|:<>?'

    let validChars = ''

    if(this.useLetters){
      validChars += letters
    }

    if(this.useNumbers){
      validChars += numbers
    }

    if(this.useSymbols){
      validChars += symbols
    }

    let generatePassword = ''
    for(let i = 0; i < this.passwordLength; i++){
      const index = Math.floor(Math.random() * validChars.length)
      generatePassword += validChars[index]
    }

    this.password = generatePassword

  }


  onChangeUseLetters(){
    this.useLetters = !this.useLetters
    this.disabledButton()
  }

  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers
    this.disabledButton()
  }

  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols
    this.disabledButton()
  }

  lengthChange(event){
    this.passwordLength = parseInt(event)
    console.log(this.passwordLength)
  }

  disabledButton(){
    if(
      !this.useLetters &&
      !this.useNumbers &&
      !this.useSymbols
    ){
      this.buttonDisabled = true
      this.password = ''
      this.selectSomething = true
    } else {
      this.buttonDisabled = false
      this.selectSomething = false
    }
  }

}