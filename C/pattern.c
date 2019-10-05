#include <stdio.h>
 
int main()
{
  int n=4, c, k;
 
 
  for (c = 1; c <= n; c++)
  {
    for(k = 1; k <= c; k++)
      printf("*");
 
    printf("\n");
  }
 
  return 0;
}
