//import { MetricService } from "danielbonifacio-sdk";
//import { useEffect, useState } from "react";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import withBoundary from "../../core/hoc/withBoundary";
import usePerformance from "../../core/hooks/usePerformance";
//import transformEditorMonthlyEaningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs";
//import Chart, { ChartProps } from "../components/Chart/Chart";
import Chart from "../components/Chart/Chart";

function UserPerformance() {
  /*
  const [editorEarnings, setEditorEarings] = useState<ChartProps["data"]>();
  const [error, setError] = useState<Error>();
  */
  const { fetchPerformance, performance } = usePerformance();

  /*
  useEffect(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEaningsIntoChartJs)
      .then(setEditorEarings)
      .catch((error) => {
        setError(new Error(error.message));
      });
  }, []);

  if (error) throw error;

  if (!editorEarnings)
    return (
      <div>
        <Skeleton height={227} />
      </div>
    );
  */
  useEffect(() => {
    fetchPerformance();
  }, [fetchPerformance]);

  if (!performance)
    return (
      <div>
        <Skeleton height={227} />
      </div>
    );

  return (
    <Chart
      title="Média de performance nos últimos 12 meses"
      //data={editorEarnings}
      data={performance}
    />
  );
}

export default withBoundary(UserPerformance, "Batata");
