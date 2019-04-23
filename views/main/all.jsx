var React = require('react');
var Layout = require('../layout/layout.jsx');
var Notification = require('../main/notification.jsx');
var Nav = require('../layout/nav.jsx');

class Test extends React.Component {

  render() {

    // Nav
    let nav = <Nav link1="/" text1="Home" link2="/new" text2="Add New" link3="/logout" text3="Log Out"/>


    let plants;

    if (this.props.plants == "") {

        plants = "You have no plants. :-) Add a new one.";

    } else {

        var message = "";

        plants = this.props.plants.map(plant => {

            let plantWaterLink = `/watered/${plant.id}`;
            let plantLink = `/plants/${plant.id}`;

            let today = new Date();
            let date = plant.next_water_date

            // let daysLeft = Math.round((date - today)/(1000*60*60*24)) -1;
            let daysLeft = Math.round((date - today)/(1000*60*60*24));


            let dueType;
            let dayType;

            if (daysLeft === -1) {
                daysLeft = "";
                dueType = "table-danger";
                dayType = "Yesterday";
            } else if (daysLeft === 1) {
                daysLeft = "";
                dueType = "";
                dayType = "Tomorrow";
            } else if (daysLeft < 0) {
               daysLeft = daysLeft * -1;
               dueType = "table-danger";
               dayType = "days ago"
            } else if (daysLeft > 0 ) {
                dueType = "";
                dayType = "days";
            } else if(daysLeft === 0) {
                dueType = "table-success";
                dayType = "Today!";
                daysLeft = "";
            }

            let frequencyMsg;

            if (plant.frequency === 1) {
                frequencyMsg = "Everyday";
            } else if (plant.frequency === 7) {
                frequencyMsg = "Once a week";
            } else if (plant.frequency === 14) {
                frequencyMsg = "Once every fortnight";
            } else if (plant.frequency === 21) {
                frequencyMsg = "Once every 3 weeks"
            } else if (plant.frequency === 30 || plant.frequency === 31) {
                frequencyMsg = "Once a month";
            } else {
                frequencyMsg = `Every ${plant.frequency} days`;
            }

            return <tr>
                          <td>{plant.name}</td>
                          <th scope="row"><a href={plantLink}>{plant.nickname}</a></th>
                          <td class={dueType}>{daysLeft} {dayType}</td>
                          <td><i>{frequencyMsg}</i> / {plant.instructions}</td>

                          <td>
                            <form method="POST">
                                 <button type="submit" formaction={plantWaterLink} class="water-sm">ed</button>
                            </form>
                        </td>
                    </tr>

        })
    }

    return (
        <Layout>
            {nav}

            <div class="table-wrap">
                <table class="table table-hover">
                      <thead>
                        <tr>
                          <th scope="col" id="tb-species">Species / genus</th>
                          <th scope="col" id="tb-name">Name</th>
                          <th scope="col" id="tb-due">Due</th>
                          <th scope="col" id="tb-instructions">Instructions</th>
                          <th scope="col" id="tb-instructions">Water</th>
                        </tr>
                      </thead>
                      <tbody>
                            {plants}
                      </tbody>
                </table>
            </div>

        </Layout>
    );
  }
}

module.exports = Test;