class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        std::unordered_map<int, int> hash;
        for (int i = 0; i < nums.size(); i++)
        {
            int half = target - nums[i];

            if (hash.find(half) != hash.end())
            {
                return {i, hash[half]};
            }

            hash[nums[i]] = i;
        }

        return {};
    }
};