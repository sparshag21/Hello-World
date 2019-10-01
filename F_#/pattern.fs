[<EntryPoint>]
let main argv = 
  for i in 1..4 do
    for _ in 1..i do
      printf "*  "
    printf "\n"