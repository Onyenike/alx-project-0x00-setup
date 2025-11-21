import Card from "@/components/Card"
import Button from '@/components/Button';

const Landing = () => {
  return (
    <div className="flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Button Variants</h1>
      <Card />
      <div className="flex flex-wrap gap-4">
        {/* Small */}
        <Button title="Small Rounded SM" size="small" shape="rounded-sm" />
        <Button title="Small Rounded MD" size="small" shape="rounded-md" />
        <Button title="Small Rounded Full" size="small" shape="rounded-full" />
        <Button title="Large Rounded LG" size="large" shape="rounded-lg" /> 
        {/* Medium */}
        <Button title="Medium Rounded SM" size="medium" shape="rounded-sm" />
        <Button title="Medium Rounded MD" size="medium" shape="rounded-md" />
        <Button title="Medium Rounded Full" size="medium" shape="rounded-full" />
        <Button title="Large Rounded LG" size="large" shape="rounded-lg" /> 
        {/* Large */}
        <Button title="Large Rounded SM" size="large" shape="rounded-sm" />
        <Button title="Large Rounded MD" size="large" shape="rounded-md" />
        <Button title="Large Rounded Full" size="large" shape="rounded-full" />
        <Button title="Large Rounded LG" size="large" shape="rounded-lg" /> 
      </div>
    </div>
  );
};

export default Landing;


