class Intuji:
    
    @staticmethod
    def sum_of_pair(list_of_nums, target):
        # Convert target to integer
        target = int(target)
        pairs = []
        
        # Iterate over list to find pair
        for i in range(len(list_of_nums)):
            for j in range(i + 1, len(list_of_nums)):  
                if list_of_nums[i] + list_of_nums[j] == target:
                    pairs.append((list_of_nums[i], list_of_nums[j]))
        
        # Check if any pairs were found
        if pairs:
            for pair in pairs:
                print(f"Pair found: ({pair[0]} + {pair[1]}) = {target}")
        else:
            print("No pair found that sums to the target.")
        
        return pairs

    @staticmethod
    def main():
        num = []
        while True:
            # Taking input for numbers
            userInput = input("Enter a number (or 'done' to stop): ")
            if userInput.lower() == 'done':
                break
            try:
                num.append(int(userInput))  # Append the number as integer
            except ValueError:
                print("Please enter a valid number.")
        
        targetInput = input("Enter the target sum: ")
        Intuji.sum_of_pair(num, targetInput)


Intuji.main()
