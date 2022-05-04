import session from "express-session";
import { Button, Form} from "react-bootstrap"

function Welcome() {
    let mensaje = ""

    if (!session.username) {
        mensaje = "Login failed"
    }else {
        mensaje = `Welcome ${session.username}`
    }
    return (
      <div>
        <h1>{mensaje}</h1>
        <Form action="/api/logout" method="GET">
            <Button variant="primary" type="submit" href="/">
                Logout
            </Button>
        </Form>
      </div>
      );
  }

  export default Welcome