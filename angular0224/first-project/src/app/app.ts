import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Navbar } from './navbar/navbar';
import { Main } from './main/main';
import { ImageBox } from './image-box/image-box';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Navbar, Main, ImageBox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   public title = "Cirip cirip"
}
