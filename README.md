# Pugin (UK Parliament Brand)
The brand of UK Parliament created by the [Parliamentary Digital Service][pds] for Parliamentary websites. It is named after the Palace of Westminster interior designer [Augustus Welby Northmore Pugin][augustus-pugin].

[![License][shield-license]][info-license]

> **NOTE:** This is currently in active development and will change at short notice. It is not production ready.

## Requirements
[parliament.uk-pugin][parliament.uk-pugin] requires the following:

* [Docker][docker] 17.0.0 and above

## Getting Started
Clone the repository:

```bash
git clone https://github.com/ukparliament/parliament.uk-pugin.git
cd parliament.uk-pugin
```

## Running the application
Running the application locally is done using docker-compose, this will build an image and container.

```bash
docker-compose up
```

After running the application, browse to [http://localhost:5000](http://localhost:5000) to view Pugin (UK Parliament Brand) on example prototypes.

### Enter the containers shell
```bash
docker-compose exec app /bin/sh
```

### Application commands available within the container
| Command  | Description  |
|---|---|
| `make watch`  | Watches project files for changes  |
| `make test`  | Runs accessibility testing  |
| `make clean`  | Deletes the public folder  |

Other commands are available in the applications [Makefile](Makefile)

## Documentation
* [W3C](docs/W3C.md)
* [WCAG](docs/WCAG.md)

## Maps
Our maps use the [leafletjs library][leafletjs] that is published under the [2-clause BSD License][license-2c-BSD].

## Contributing
If you wish to submit a bug fix or feature, you can create a pull request and it will be merged pending a code review.

1. Fork the repository
1. Create your feature branch (`git checkout -b my-new-feature`)
1. Commit your changes (`git commit -am 'Add some feature'`)
1. Push to the branch (`git push origin my-new-feature`)
1. Create a new Pull Request

## License
[parliament.uk-pugin][parliament.uk-pugin] is licensed under the [Open Parliament Licence][info-license].

[docker]:          		  https://www.docker.com/
[nodejs]:          		  http://nodejs.org
[pug-cli]:         		  https://github.com/pugjs/pug-cli
[leafletjs]:         		http://leafletjs.com/
[license-2c-BSD]:       https://opensource.org/licenses/BSD-2-Clause

[parliament.uk-pugin]:  https://github.com/ukparliament/parliament.uk-pugin
[pds]:             		  https://www.parliament.uk/mps-lords-and-offices/offices/bicameral/parliamentary-digital-service/
[augustus-pugin]:       https://en.wikipedia.org/wiki/Augustus_Pugin

[info-license]:    	  	http://www.parliament.uk/site-information/copyright/open-parliament-licence/
[shield-license]:  		  https://img.shields.io/badge/license-Open%20Parliament%20Licence-blue.svg
