# Exercise 2: Login System

## 🎯 Objective
Build a secure login system that validates usernames and passwords using **logical operators** (&&, ||, !) and **comparison operators**. Practice combining multiple conditions for complex validation logic.

## 📋 Requirements

### Basic Requirements
1. **Username Input Field**: Text input for username
2. **Password Input Field**: Password input for password
3. **Login Button**: Attempts to log in
4. **Result Display**: Shows success or error messages

### User Database
Store at least 3 valid username/password combinations:
- Username: "admin" / Password: "admin123"
- Username: "user" / Password: "pass456"
- Username: "guest" / Password: "guest789"

### Features to Implement

#### 1. **Username Validation**
Check that the username:
- Is not empty
- Is at least 3 characters long
- Exists in your user database
- Display specific error for each validation failure

#### 2. **Password Validation**
Check that the password:
- Is not empty
- Is at least 6 characters long
- Matches the password for the entered username
- Display specific error for each validation failure

#### 3. **Login Logic**
Use logical operators to check:
- Username is valid **AND** password is correct → Login success
- Username is valid **AND** password is wrong → "Incorrect password"
- Username doesn't exist → "Username not found"
- Either field is empty → "Please fill in all fields"

#### 4. **Login Attempts Tracking**
- Track number of failed login attempts
- After 3 failed attempts, lock the account temporarily
- Show remaining attempts after each failure
- Display a "locked" message when locked

#### 5. **Success State**
When login succeeds:
- Display welcome message with username
- Show current date/time of login
- Display a "logout" button
- Hide the login form

## 🌟 Bonus Challenges

### Password Strength Checker
Before login, check password strength:
- Weak: Less than 8 characters
- Medium: 8-12 characters
- Strong: 12+ characters **AND** contains numbers
- Very Strong: 12+ characters **AND** contains numbers **AND** contains special characters

### "Remember Me" Checkbox
- Add a checkbox for "Remember Me"
- If checked **AND** login successful, show a confirmation message
- Use logical AND to combine conditions

### Admin vs Regular User
- Add a user role ("admin" or "user")
- If username === "admin" **AND** password correct **AND** current time is business hours → Grant access
- Use multiple logical operators

### Account Recovery
- Add "Forgot Password?" button
- Validate email format using string checking
- Show different messages based on whether username exists **OR** email is valid

### Two-Factor Authentication (2FA)
- After successful password, require a 4-digit code
- Use nested conditions
- Success requires: Valid username **AND** valid password **AND** valid 2FA code

## 💡 Hints

### Checking Multiple Conditions with AND
```javascript
if (username !== '' && password !== '') {
    // Both fields are filled
    if (username === 'admin' && password === 'admin123') {
        // Login successful
    }
}
```

### Checking Alternatives with OR
```javascript
if (username === '' || password === '') {
    // At least one field is empty
    displayError('Please fill in all fields');
}
```

### Using NOT Operator
```javascript
if (!usernameExists) {
    // Username does NOT exist
    displayError('Username not found');
}
```

### Complex Validation Logic
```javascript
const validUsername = username.length >= 3 && userExists(username);
const validPassword = password.length >= 6;
const credentialsMatch = checkPassword(username, password);

if (validUsername && validPassword && credentialsMatch) {
    // All conditions met - login successful
}
```

### Tracking Failed Attempts
```javascript
let failedAttempts = 0;
const MAX_ATTEMPTS = 3;

function attemptLogin() {
    if (failedAttempts >= MAX_ATTEMPTS) {
        displayError('Account locked! Too many failed attempts.');
        return;
    }
    
    // ... login logic ...
    
    if (!loginSuccessful) {
        failedAttempts++;
        let remaining = MAX_ATTEMPTS - failedAttempts;
        displayError('Login failed. ' + remaining + ' attempts remaining.');
    }
}
```

## 🎨 Styling Tips
- Use a modern, clean design
- Show password strength indicator with colored bar
- Display error messages in red with ❌ icon
- Display success message in green with ✅ icon
- Add animations for form shake on error
- Disable login button when account is locked
- Use different background colors for different states

## 🧪 Test Cases

### Valid Logins
- Username: "admin", Password: "admin123" → Success
- Username: "user", Password: "pass456" → Success
- Username: "guest", Password: "guest789" → Success

### Invalid Logins
- Username: "", Password: "anything" → Error: Fill in all fields
- Username: "admin", Password: "" → Error: Fill in all fields
- Username: "ab", Password: "admin123" → Error: Username too short
- Username: "admin", Password: "123" → Error: Password too short
- Username: "admin", Password: "wrongpass" → Error: Incorrect password
- Username: "nonexistent", Password: "anything" → Error: Username not found

### Failed Attempts
- 1st failed attempt → "2 attempts remaining"
- 2nd failed attempt → "1 attempt remaining"
- 3rd failed attempt → "Account locked!"
- 4th attempt → Should not allow login

## 📝 What You'll Learn
- Logical AND operator (&&) for combining conditions
- Logical OR operator (||) for alternative conditions
- Logical NOT operator (!) for negating conditions
- Complex validation logic
- Nested conditionals
- State management (tracking login attempts)
- User feedback and error handling
- Real-world authentication patterns

## 🔒 Security Note
In a real application, you would never store passwords in plain text or in JavaScript! This is just for learning purposes. Real apps use:
- Server-side authentication
- Encrypted passwords (hashing)
- Secure communication (HTTPS)
- Database storage

Good luck building your login system! Remember to use logical operators to combine multiple conditions! 🔐
