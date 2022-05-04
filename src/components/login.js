import { Form, Button } from "react-bootstrap";

function Login() {
    return (
      <div>
        <Form action="/api/login" method="GET">
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
            

        <Button variant="primary" type="submit" href="/welcome">
            Login
        </Button>
    </Form>
      </div>
    );
  }

  export default Login