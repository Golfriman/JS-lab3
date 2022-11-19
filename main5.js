function Fizzbuzz(number)
{
    for(let i = 1; i <= number; i++)
    {
        switch(i % 5)
        {
            case 3:
                console.log('fizz');
                break;
            case 0:
                console.log('buzz');
                break;
            default:
                console.log(i);
                break;
        }
    }
}

Fizzbuzz(5);