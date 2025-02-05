const employees = [
    { id: 1, name: "Alice", department: "HR", salary: 50000, status: "active" },
    { id: 2, name: "Bob", department: "Engineering", salary: 80000, status: "inactive" },
    { id: 3, name: "Charlie", department: "HR", salary: 60000, status: "active" },
    { id: 4, name: "David", department: "Engineering", salary: 90000, status: "active" },
    { id: 5, name: "Eve", department: "Marketing", salary: 70000, status: "active" }
  ];
  
  const departmentBudgets = {
    HR: 150000,
    Engineering: 200000,
    Marketing: 100000
  };
  const departmentData = employees
    .filter(employee => employee.status === "active")
    .reduce((acc, { name, department, salary }) => {
      if (!acc[department]) {
        acc[department] = {
          employees: [],
          totalSalary: 0
        };
      }
      acc[department].employees.push({ name, salary });
      acc[department].totalSalary += salary;
      return acc;
    }, {});
  const result = Object.entries(departmentData).map(([department, data]) => {
    return {
      department,
      employees: data.employees.sort((a, b) => b.salary - a.salary),
      totalSalary: data.totalSalary,
      budget: departmentBudgets[department],
      isOverBudget: data.totalSalary > departmentBudgets[department]
    };
  });
  
  console.log(JSON.stringify(result));