import { Form, Button } from "react-bootstrap";

function Register() {
    return (
      <div>
          <h1>Register:</h1>
        <Form action="/user/register" method="GET">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="user" placeholder="Enter Username" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            

        <Button variant="primary" type="submit" href="/">
            Resgister
        </Button>
        <Button variant="primary"  href="/register">
            Go to Register
        </Button>
    </Form>
      </div>
    );
  }

  export default Register