# devex

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### https://next.json-generator.com/
## salons
[
  {
    'repeat(6)': {
      id: '{{index()}}',
      address: '{{street()}} {{integer(100, 999)}}',
      geo: '{{floating(-90.000001, 90)}}, {{floating(-180.000001, 180)}}',
      time: '{{moment().format("09:00")}} - {{ moment().format("22:00")}}',
	  picture: 'https://picsum.photos/id/{{integer(20, 40)}}/200/100.jpg',
      text: '{{lorem(3, "sentences")}}'
    }
  }
]
## workers
[
  {
    'repeat(50)': {
      id: '{{index()}}',
      name: {
        first: '{{firstName()}}',
        last: '{{surname()}}'
      },
      description: 'Мастер {{random("ногтевого сервиса", "бровист")}}',
      idsalon : '{{integer(0, 6)}}'
    }
  }
]

## timetable
[
  {
    'repeat(1)': {
      id: '{{index()}}',
      yers: '{{moment().format("YYYY")}}',
             month: 
        {
          'repeat(1)': '{{moment().locale("ru").format("MMMM")}}'
        },  
             day: 
        {
          'repeat(30)': '{{moment().locale("ru").add(1, "day").calendar()}}'
        }, 
      timetable: [
        {
          'repeat(24)': '{{moment().locale("ru").add(30, "hour").calendar()}}'
        }]
    }
  }
]