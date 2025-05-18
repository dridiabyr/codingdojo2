using System;

class Program
{
    static void Main(string[] args)
    {
        
        Enemy goblin = new Enemy("Goblin");

       
        Attack slash = new Attack("Slash", 10);
        Attack fireball = new Attack("Fireball", 20);
        Attack bite = new Attack("Bite", 15);

        
        goblin.AddAttack(slash);
        goblin.AddAttack(fireball);
        goblin.AddAttack(bite);

        
        Console.WriteLine($"Enemy: {goblin.Name}, Health: {goblin.Health}");
        Console.WriteLine("Testing random attacks...\n");

        for (int i = 0; i < 5; i++)
        {
            goblin.RandomAttack();
        }
    }
}
