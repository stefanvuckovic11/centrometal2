import { Component } from '@angular/core';

interface AccordionItem {
  title: string;
  children?: string[];
  link?: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone : false
})
export class AccordionComponent {
  items: AccordionItem[] = [
    { title: 'BIJELA TEHNIKA',        children: ['Veš mašine','Sušilice','Frižideri','Štednjaci','Zamrzivači'] },
    { title: 'UGRADNA TEHNIKA',       children: ['Ugradbene rerne','Ugradbene ploče','Mašine za suđe','Aspiratori'] },
    { title: 'KLIMATIZACIJA I GRIJANJE', link: '/climate' },
    { title: 'MALI KUĆNI APARATI',    children: ['Mikseri','Tosteri','Aparati za kafu','Usisivači'] },
    { title: 'TV I VIDEO',            children: ['LED televizori','Smart TV','Projektori'] },
    { title: 'AUDIO',                 children: ['Zvučnici','Slušalice','Radio uređaji'] },
    { title: 'TELEFONIJA',            children: ['Mobilni telefoni','Fiksni telefoni','Dodaci za telefone'] },
    { title: 'KAMERE I FOTO APARATI', link: '/cameras' },
    { title: 'AUTO TEHNIKA',          link: '/auto' },
    { title: 'RAČUNARI I PERIFERIJE', link: '/computers' },
    { title: 'KONZOLE I IGRICE',      link: '/gaming' },
    { title: 'POSTELJINE',            link: '/linen' },
    { title: 'KUPOVINA PREKO T-COMA', link: '/t-com' }
  ];

  toggle(i: number) {
    if (!this.items[i].children) return;
    this.items[i].expanded = !this.items[i].expanded;
  }
}
