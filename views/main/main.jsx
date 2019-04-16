var React = require("react");
// var Layout = require('../layout/layout.jsx');

class SignUp extends React.Component {
  render() {


    // console.log(this.props.types);


    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <link rel="stylesheet" href="/style.css"/>

        </head>
        <body>
            <div class="row d-flex m-5 justify-content-center">
                <div class="col-3">
                    <form method="POST" action="/signup">
                        <div class="form-group">
                            <input type="text" name="username" class="form-control" id="exampleInputPassword1" placeholder="Username"/>
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Sign up</button>
                        <span class="login">or <a href="/login">Log in</a></span>
                    </form>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = SignUp;