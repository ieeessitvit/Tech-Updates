var d = new Date();
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerHTML = (monthName[d.getMonth()] + " Updates📰");

// Make changes on monthlyUpdates only. You can add as many announcements as you wish. Keep it small.

var monthlyUpdates = [
    {
        "announcement": "We welcome the new recruits in SSIT! 🧑‍💻 👩‍💻"
    },
    {
        "announcement": "Accomplishment 🎉: GitMash 🎮"
    },
    {
        "announcement": "Accomplishment 🎉: Data Science project of COVID-19"
    },
    {
        "announcement": "Ongoing 🏃‍♂️: App Dev Projects"
    },
    {
        "announcement": "Ongoing 🏃‍♂️: Farmer's Marketplace"
    }
]

// End of changes

const updates = document.getElementById('updates')
var i;
for (i = 0; i < monthlyUpdates.length; i++) {
    const announcement = document.createElement('div')
    announcement.className = 'notice-bar'
    announcement.textContent = monthlyUpdates[i].announcement
    updates.appendChild(announcement)
}

