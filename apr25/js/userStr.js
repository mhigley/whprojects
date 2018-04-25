function userStr(evt){
    console.log(searchBox.value);
    getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=7qc9Umm9EMACnPEhE0YxJa-FfGO856cY`, githubUsers);
    // if(
    //     evt.key !== 'undefined' &&
    //     evt.key !== 'Backspace' &&
    //     evt.key !== 'Tab'
    // )
    // str += evt.key;

    // console.log(str, searchBox.value);
    
    // getCharacter(userSearch);
}