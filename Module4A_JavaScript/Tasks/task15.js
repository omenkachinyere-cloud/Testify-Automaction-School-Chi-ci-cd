const objects = [{
    name: 'Books',
    description: 'A collection of the acts of God in the Old Testament',
    numberOfPages: 103,
    Authour: 'Chinyere Nwamaka Newton-Ihoeghian',
    reading: true,
},
{
    name: 'Books of the New Testament',
    description: 'A collection of the acts of God in the New Testament',
    numberOfPages: 143,
    Authour: 'Chi Nwam Newton-Ihoeghian',
    reading: false,
},
{
    name: 'Books of the Bible',
    description: 'A collection of the acts of God in the Bible',
    numberOfPages: 246,
    Authour: 'Chiny Nwama Newton-Ihoeghian',
    reading: true,
   }
]
//look through the array and log books with reading=== true
for (let i = 0; i < objects.length; i++) {
    if (objects[i].reading === true) {
        console.log(objects[i]);
    }
}



 
