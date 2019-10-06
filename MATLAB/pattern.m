for i=1:4
    string = '     '; 
    index1 = 1;
    index2 = i;
    string(index1:index2) = '*';
    fprintf('%s\n', string);   
end
 