# stdlib + Amazon Alexa = <3

This is a basic Amazon Alexa setup for [stdlib](https://stdlib.com).

There's a "main" function that interprets the request from Amazon Alexa
(as an HTTPS endpoint), and then delegates to other functions based on the
request intent. These other functions are also standalone HTTP endpoints
(for testing purposes).

We'll be releasing a more detailed guide as to how to set this up with Alexa
(on the Amazon end) this week.

You can deploy this to [stdlib](https://stdlib.com) by [downloading the stdlib
CLI tools](https://github.com/poly/stdlib), typing

```
$ lib init
```

in a parent directory, cloning this repo, and then properly setting
the service name to begin with your username in `package.json`. Make sure the
username is set to the username you signed up with.

## Thanks!

Cheers and happy building! We'll have more information up soon. For now,

[Follow us on Twitter, @polybit](https://twitter.com/polybit)

or [register for stdlib](https://stdlib.com)
