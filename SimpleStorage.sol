pragma solidity 0.8.11;
// pragma is a compiler directive to generate Bytecode using the solodity version mentioned


contract SimpleStorage{

    // This is the way to declare a variable 
    uint x;

    // Format of the function is 
        // function function_name access_specifier view(only if it is read-only function) returns(only if there is a return statement)
    function get() public view returns (uint){
        return x;
    }

    function set(uint y) public {
        x = y;
    }

}
