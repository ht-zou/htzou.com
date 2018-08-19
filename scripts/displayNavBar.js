function displayNavBar() {
    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

    var navbar = document.createElement("div");
    navbar.setAttribute("id", "JournalNavBar");

    var description = document.createElement("h2");
    var description_text = document.createTextNode("Jump To Dates");
    description.setAttribute("id", "NavBarTitle");
    description.appendChild(description_text);

    var headings = document.getElementsByTagName("h3");
    var dates_array = new Array();

    for (var i = 0; i < headings.length; i++) {
        var current_heading = headings[i];
        var date = current_heading.lastChild.nodeValue;
        dates_array[i] = date;
    }

    var un_list = document.createElement("ul");           

    for (i in dates_array) {
        var date = dates_array[i]; 
        var listing = document.createElement("li");
        var link = document.createElement("a");
        var link_text = document.createTextNode(date);
        link.setAttribute("href", "#" + date);
        link.appendChild(link_text);
        listing.appendChild(link);
        un_list.appendChild(listing);
    }

    navbar.appendChild(description);
    navbar.appendChild(un_list);
    var journal_content = document.getElementById("JournalContent");
    document.body.insertBefore(navbar, journal_content);
}
addLoadEvent(displayNavBar);