const jwt = require("jsonwebtoken");


exports.LoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader)

  try {
    if (!authHeader) {
      return res.status(401).json({ errorMessage: "Unauthorized." });
    }
    
    const token = authHeader.split(" ")[1];
    console.log(token)
    if (!token) {
      return res.status(401).json({ errorMessage: "Unauthorized.." });
    }

    const { userType, userId } = jwt.verify(token,"secretkey" );
    console.log(userType, userId);

    req.userType = userType;
    req.userId = userId;

    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ errorMessage: "Unauthorized..." });
  }
};

exports.isSeller = (req, res, next) => {
  if (req.userType !== "seller") {
    return res.status(403).json({ errorMessage: "Forbidden: Seller only" });
  }
  next();
};

exports.isCustomer = (req, res, next) => {
  if (req.userType !== "customer") {
    return res.status(403).json({ errorMessage: "Forbidden: Customer only" });
  }
  next();
};