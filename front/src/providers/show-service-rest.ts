import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let showsURL = SERVER_URL + 'activities/';

@Injectable()
export class ShowService {
  favorites: Array<any> = [];

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(showsURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(showsURL + id)
            .map(res => res.json())
            .toPromise();
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    canFavorite(show) {
        console.log(show);
        console.log(this.favorites);
        return this.favorites.map(s => s._id).indexOf(show._id) === -1;
    }

    favorite(show) {
        this.favorites.push(show);
        return Promise.resolve();
    }

    unfavorite(show) {
        let index = this.favorites.map(s => s._id).indexOf(show._id);
        if (index > -1) {
          this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }

    findAllDummy() {
        return [
            {
                "name": "Visite guidée : Musée du Louvre",
                "description": "Visite de 2h de l'un des plus grands musée du monde avec une guide. Vous verez une exposition temporaire et une partie de l'exposition permanente (avec la Joconde). Un must-do à Paris! Prix unitaire: 10€",
                "lat": 48.8534104,
                "long": 2.3498003,
                "address": "Musée du Louvre, 75058 Paris",
                "image": "https://www.justacote.com/photos_entreprises/quartier-louvre-rivoli-paris-1353008107.jpg",
            },
            {
                "name": "Visite : Zoo de Vincennes",
                "description": "Le Zoo de Vincennes est un parc zoologique français du Muséum national d'histoire naturelle, situé dans le 12e arrondissement de Paris, où il couvre une superficie de 14,5 hectares dans l'ouest du bois de Vincennes. Conçu en 1934, en complément de la ménagerie du Jardin des plantes, ce zoo a pour vocation l'observation du comportement animal en captivité et la reproduction d'espèces menacées dans leur milieu d'origine. ",
                "lat": 48.8634099,
                "long": 2.3488001,
                "address": "Parc Zoologique de Paris, Avenue Daumesnil, 75012 Paris",
                "image": "assets/img/elephants.JPG",
            },
            {
                "name": "Visite : Tour Eiffel",
                "description": "La tour Eiffel est une tour de fer puddlé de 324 mètres de hauteur située à Paris, à l’extrémité nord-ouest du parc du Champ-de-Mars en bordure de la Seine dans le 7e arrondissement. Construite par Gustave Eiffel et ses collaborateurs pour l’Exposition universelle de Paris de 1889, et initialement nommée « tour de 300 mètres », ce monument est devenu le symbole de la capitale française, et un site touristique de premier plan : il s’agit du second site culturel français payant le plus visité en 2011. Depuis son ouverture au public, elle a accueilli plus de 300 millions de visiteurs. ",
                "lat": 48.8534099,
                "long": 2.3488001,
                "address": "5, avenue Anatole-France, 75007 Paris",
                "image": "http://www.travelling-kids.com/wprod/wp-content/uploads/2011/05/toureiffel.jpg",
            },
            {
                "name": "Soirée : Café Oz (Chatêlet)",
                "description": "Le Café Oz est un pub anglophone qui véhicule l'image de l'Australie. La convivialité, la simplicité, l'esprit d'équipe et la garantie d'une ambiance décontractée sont autant de valeurs que nous jugeons essentielles au sein de nos établissements. À la recherche d'une clientèle jeune, festive, et sportive, nous avons à coeur de recréer l'énergie et la bonne humeur de la fête à l'anglo-saxonne. Nous mettons également un point d'honneur à diffuser de nombreux événements sportifs sur écrans géants comme le rugby, le football australien ou le cricket pour faire vivre à nos clients la passion du sport façon « Aussie » ! ",
                "lat": 48.8534099,
                "long": 2.3488001,
                "address": "18 rue St Denis, 75001 Paris ",
                "image": "assets/img/cafe.jpg",
            },
            {
                "name": "Tennis : Partie au TCP",
                "description": " Location d'un terrain de tennis pour 12€/l'heure dans l'un des plus grand club de tennis de Paris.",
                "lat": 48.8534099,
                "long": 2.3488001,
                "address": "5 Avenue Félix d'Herelle, 75016 Paris",
                "image": "assets/img/tennis.jpg",
            },
            {
                "name": "Fête des Vendanges de Montmartre",
                "description": "La Fête des vendanges de Montmartre célèbre annuellement, depuis 1934, l'arrivée des cuvées issues du Clos Montmartre. L'organisation est assurée par la mairie du 18e arrondissement, mobilise les acteurs de la vie locale (commerçants, artistes, associations, écoles, ...) et invite des célébrités à parrainer l’événement. ",
                "lat": 48.8534099,
                "long": 2.3488001,
                "address": "Montmartre, 75019 Paris",
                "image": "http://s1.lprs1.fr/images/2017/10/10/7321206_1c09fe12-ad0b-11e7-8c52-9592d7f48354-1_1000x625.jpg"
            },
        ];
    }
}