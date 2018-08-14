const comments = [
    {
        id: 1,
        text: 'Nowy komentarz',
        votes: 0
    },
    {
        id: 2,
        text: 'Stary komentarz',
        votes: 42
    }
]
    var id = 1;
    comments.forEach(element => {
            if(id === element.id){
                console.log(element);
            }
        
    });

