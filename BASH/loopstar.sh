#!/bin/bash
foo="*"
for i in 1 2 3 4
do
	echo "$foo"
	foo="${foo} *"
done