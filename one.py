# a=[1,2,3,4,2,4,1,6,3]
# frq={}

# for i in a:
#     #frq[i]=frq(i,0)+1
#     if i in frq:
#         frq[i] += 1
#     else:
#         frq[i] = 1
# print(frq)

#Array to subarray's
# b=[10,30,50,70]
# subarr=[]

# for i in range(len(b)): #row values
#     #for j in range(i+1,len(b)+1): #column values 
#         subarr.append(b[i:])  #row:column
# print(subarr)

b=[10,20,30,40,50]
k=2

for i in range(len(b)-k+1):
    print(b[i:i+k])

