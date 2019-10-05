[<EntryPoint>]
let main argv = 
  printf "Enter name: "
  let name = Console.ReadLine();
  printfn "Welcome, %s" name