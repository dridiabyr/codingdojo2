public class RangedFighter : Enemy
{
    public int Distance;

    public RangedFighter(string name) : base(name)
    {
        this.health = 100;
        Distance = 5;
        AttackList.Add(new Attack("Shoot an Arrow", 20));
        AttackList.Add(new Attack("Throw a Knife", 15));
    }

    public override void PerformAttack(Enemy target, Attack chosenAttack)
    {
        if (Distance < 10)
        {
            Console.WriteLine($"{Name} is too close to perform a ranged attack!");
        }
        else
        {
            base.PerformAttack(target, chosenAttack);
        }
    }

    public void Dash()
    {
        Distance = 20;
        Console.WriteLine($"{Name} dashes back to increase distance to {Distance}.");
    }
}
