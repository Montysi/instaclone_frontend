export const signUp = async (username, email, password) => {
    try {

        const response = await fetch("http://localhost:5001/users/signUp", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        });

        const data = await response.json()
        console.log("data ", data);
        return data;
        
    } catch (error) {
        
        console.log(error);

    }
};