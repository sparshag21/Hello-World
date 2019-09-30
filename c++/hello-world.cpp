#include<iostream>
using namespace std;

int main()
{
	char user[20];
	cout<<"Hello World!\n";

    cout<<"Enter Your Name!\n";
	cin>>user;
	cout<<"Welcome "<<user;

    for(int i=0; i<5; i++){
        for(int j=0; j<i; j++){
            cout<<"*";
        }
        cout<<"\n";
    }
    return 0;
}