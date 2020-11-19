def running_sum(nums)
    running = []
    def add(n, array, total)
        if n === 0
            total[n] = array[n]
            add(n + 1, array, total)
        elsif n === array.length - 1
            sum = array[n] + total[n - 1]
            total[n] = sum
            return total
        else
            sum = array[n] + total[n - 1]
            total[n] = sum
            add(n + 1, array, total)
        end
    end
    add(0, nums, running)
end