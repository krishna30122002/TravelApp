import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user registration
export const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        console.log(username, email, password);
        // Hashing password
        const hash = await bcrypt.hash(password, 10); // Await the hash function

        const newUser = {
            username: username,
            email: email,
            password: hash,
        };

        const createdUser = await User.create(newUser);

        res.status(200).json({
            success: true,
            message: `${createdUser.username} Created Successfully`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Failed to Create. Try Again",
        });
    }
};

//user login
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "user not found" });
        }

        const checkCorrectPassword = await bcrypt.compare(
            password,
            user.password
        );

        if (!checkCorrectPassword) {
            return res
                .status(401)
                .json({ success: false, message: "Incorrect Credentials" });
        }

        const { role, ...rest } = user._doc;

        // create jwt token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "15d" }
        );

        //set token in the browser cookies and send the response to the client
        res.cookie("accessToken", token, {
            httpOnly: true,
            expires: token.expiresIn,
        })
            .status(200)
            .json({
                token,
                data: { ...rest },
                role,
            });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to login" });
    }
};
